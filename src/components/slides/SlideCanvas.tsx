import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import type { SceneAccent } from '@/lib/slideContent'

interface SlideCanvasProps {
  accent: SceneAccent
  /** Cambia en cada slide (aunque el accent se repita) — dispara la transición */
  slideId: string
}

/**
 * Paleta pensada para proyectores viejos/muy brillantes: fondo casi blanco
 * (nunca negro), símbolos en tonos de marca bien visibles — vivos, pero
 * nunca un relleno grande y saturado que "lave" con la luz del proyector.
 *
 * Motivo visual: símbolos de código flotantes ({ } < > ; = ...) y un cursor
 * parpadeante, en vez de cualquier logo real de GitHub/Copilot — las marcas
 * registradas no se pueden recolorear ni animar sin autorización.
 */
const ACCENT_COLORS: Record<SceneAccent, { primary: string; secondary: string; particle: string }> = {
  intro: { primary: '#7c3aed', secondary: '#c026d3', particle: '#a855f7' },
  harness: { primary: '#7c3aed', secondary: '#6d28d9', particle: '#8b5cf6' },
  architecture: { primary: '#8b5cf6', secondary: '#a21caf', particle: '#c026d3' },
  models: { primary: '#7c3aed', secondary: '#9333ea', particle: '#a855f7' },
  byok: { primary: '#c026d3', secondary: '#7c3aed', particle: '#e879f9' },
  context: { primary: '#7c3aed', secondary: '#6d28d9', particle: '#8b5cf6' },
  tokens: { primary: '#a21caf', secondary: '#7c3aed', particle: '#e879f9' },
  lifecycle: { primary: '#7c3aed', secondary: '#c026d3', particle: '#a855f7' },
  closing: { primary: '#7c3aed', secondary: '#c026d3', particle: '#a855f7' },
}

const SYMBOLS = ['{ }', '< >', '( )', '=>', '//', ';', '#', '::', '[ ]', '&&']
const BACKGROUND_COLOR = 0xfcfbff

/** Dibuja un símbolo de código en un canvas — blanco con alpha, para poder
 * teñirlo después con `material.color` sin regenerar la textura. */
function createSymbolTexture(symbol: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 128
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.font = '700 64px "SF Mono", Monaco, "Fira Code", monospace'
  ctx.fillStyle = '#ffffff'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(symbol, canvas.width / 2, canvas.height / 2 + 4)
  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

export function SlideCanvas({ accent, slideId }: SlideCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const spritesRef = useRef<THREE.Sprite[]>([])
  const particlesRef = useRef<THREE.Points | null>(null)
  const cursorRef = useRef<THREE.Mesh | null>(null)
  const groupRef = useRef<THREE.Group | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const burstRef = useRef(0) // 1 → recién cambió de slide, decae a 0

  // Mount/unmount: crea el renderer una sola vez, limpia todo al salir.
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(BACKGROUND_COLOR)
    scene.fog = new THREE.Fog(BACKGROUND_COLOR, 8, 24)

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    )
    camera.position.set(0, 0, 8)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)
    groupRef.current = group

    // Símbolos de código flotando — sesgados a la derecha, porque el panel
    // de texto vive a la izquierda.
    const SYMBOL_COUNT = 16
    for (let i = 0; i < SYMBOL_COUNT; i++) {
      const symbol = SYMBOLS[i % SYMBOLS.length]
      const texture = createSymbolTexture(symbol)
      const material = new THREE.SpriteMaterial({
        map: texture,
        color: 0x7c3aed,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
      })
      const sprite = new THREE.Sprite(material)
      const scale = 0.9 + Math.random() * 0.9
      sprite.scale.set(scale * 1.6, scale * 0.8, 1)

      const angle = (i / SYMBOL_COUNT) * Math.PI * 2
      const radius = 3.2 + Math.random() * 3.6
      sprite.position.set(
        Math.cos(angle) * radius + 3.4,
        Math.sin(angle) * radius * 0.6,
        (Math.random() - 0.5) * 4 - 1
      )
      sprite.userData.baseY = sprite.position.y
      sprite.userData.floatOffset = Math.random() * Math.PI * 2
      sprite.userData.floatSpeed = 0.3 + Math.random() * 0.3

      group.add(sprite)
      spritesRef.current.push(sprite)
    }

    // Cursor de texto parpadeante — un guiño directo al editor de código.
    const cursorGeometry = new THREE.PlaneGeometry(0.09, 1.1)
    const cursorMaterial = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.85,
    })
    const cursor = new THREE.Mesh(cursorGeometry, cursorMaterial)
    cursor.position.set(2.6, -0.3, 1.5)
    group.add(cursor)
    cursorRef.current = cursor

    // Polvo de partículas — textura/profundidad, muy sutil.
    const PARTICLE_COUNT = 200
    const particlePositions = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 22
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 14
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 14 - 3
    }
    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3))
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xa855f7,
      size: 0.06,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: true,
    })
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)
    particlesRef.current = particles

    let frameId: number
    const clock = new THREE.Clock()

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      const dt = clock.getDelta()

      // El "burst" decae exponencialmente: da un golpe de energía visible
      // apenas cambia de slide, sin quedar dando vueltas para siempre.
      burstRef.current = Math.max(0, burstRef.current - dt * 1.4)
      const burst = burstRef.current

      spritesRef.current.forEach((sprite) => {
        const floatY = Math.sin(t * sprite.userData.floatSpeed + sprite.userData.floatOffset) * 0.35
        sprite.position.y = sprite.userData.baseY + floatY
        sprite.material.rotation = Math.sin(t * 0.15 + sprite.userData.floatOffset) * 0.06
      })

      if (groupRef.current) {
        const baseSpeed = 0.05
        groupRef.current.rotation.y = Math.sin(t * baseSpeed) * 0.12 + burst * 0.25
        const pulse = 1 + burst * 0.15
        groupRef.current.scale.setScalar(pulse)
      }
      if (cursorRef.current) {
        // Parpadeo tipo cursor de editor: ~1Hz, con un pulso extra en la transición.
        const blink = Math.sin(t * Math.PI * 1.6) > 0 ? 0.85 : 0.1
        ;(cursorRef.current.material as THREE.MeshBasicMaterial).opacity = blink
      }
      if (particlesRef.current) {
        particlesRef.current.rotation.y = -t * 0.015
      }
      if (cameraRef.current) {
        cameraRef.current.position.z = 8 - burst * 1.1
        cameraRef.current.fov = 50 + burst * 4
        cameraRef.current.updateProjectionMatrix()
      }

      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      spritesRef.current.forEach((sprite) => {
        sprite.material.map?.dispose()
        sprite.material.dispose()
      })
      spritesRef.current = []
      cursorGeometry.dispose()
      cursorMaterial.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Cambiar de slide: retiñe los símbolos (vía material.color, la textura
  // queda blanca/alpha) según el grupo temático.
  useEffect(() => {
    const colors = ACCENT_COLORS[accent]
    spritesRef.current.forEach((sprite, i) => {
      sprite.material.color.set(i % 2 === 0 ? colors.primary : colors.secondary)
    })
    if (cursorRef.current) {
      ;(cursorRef.current.material as THREE.MeshBasicMaterial).color.set(colors.primary)
    }
    if (particlesRef.current) {
      ;(particlesRef.current.material as THREE.PointsMaterial).color.set(colors.particle)
    }
  }, [accent])

  // El "burst" de transición dispara en CADA cambio de slide, aunque el
  // accent (grupo temático) se repita entre slides consecutivos.
  useEffect(() => {
    burstRef.current = 1
  }, [slideId])

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}
