import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Diagrama animado del ciclo Pensar → Actuar → Observar, en los mismos
 * tonos de marca que las ilustraciones del deck (púrpura/magenta). Tres
 * nodos en triángulo, conectados por un loop direccional, con un pulso
 * que viaja de nodo en nodo — el nodo más cerca del pulso "se activa"
 * (crece y brilla), mostrando cuál etapa del ciclo está corriendo.
 *
 * Vive en un cuadro contenido (no como fondo de todo el slide) — el
 * canvas es transparente para dejar ver la tarjeta blanca del contenedor.
 */

const STAGES = [
  { label: '1. Pensar', color: '#7c3aed', position: new THREE.Vector3(0, 1.05, 0), labelOffset: new THREE.Vector3(0, 0.85, 0) },
  { label: '2. Actuar', color: '#c026d3', position: new THREE.Vector3(0.95, -0.55, 0), labelOffset: new THREE.Vector3(0.15, -0.85, 0) },
  { label: '3. Observar', color: '#6d28d9', position: new THREE.Vector3(-0.95, -0.55, 0), labelOffset: new THREE.Vector3(-0.15, -0.85, 0) },
]

function createLabelTexture(text: string, color: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 128
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.font = '700 52px system-ui, -apple-system, "Segoe UI", sans-serif'
  ctx.fillStyle = color
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 4)
  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

/** Textura de resplandor suave (gradiente radial) para el pulso viajero. */
function createGlowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 128
  const ctx = canvas.getContext('2d')!
  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
  gradient.addColorStop(0, 'rgba(124,58,237,0.55)')
  gradient.addColorStop(0.45, 'rgba(168,85,247,0.32)')
  gradient.addColorStop(1, 'rgba(168,85,247,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 128, 128)
  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

export function ThinkActObserveDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.1, 50)
    camera.position.set(0, 0, 5.6)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const disposables: Array<{ dispose: () => void }> = []

    // Nodos: icosaedros de color plano, con un halo translúcido detrás.
    const nodeGeometry = new THREE.IcosahedronGeometry(0.42, 1)
    const haloGeometry = new THREE.IcosahedronGeometry(0.55, 1)
    disposables.push(nodeGeometry, haloGeometry)

    const nodes: THREE.Mesh[] = []
    const halos: THREE.Mesh[] = []
    const labelSprites: THREE.Sprite[] = []

    STAGES.forEach((stage) => {
      const material = new THREE.MeshBasicMaterial({ color: stage.color })
      const node = new THREE.Mesh(nodeGeometry, material)
      node.position.copy(stage.position)
      group.add(node)
      nodes.push(node)
      disposables.push(material)

      const haloMaterial = new THREE.MeshBasicMaterial({
        color: stage.color,
        transparent: true,
        opacity: 0.22,
      })
      const halo = new THREE.Mesh(haloGeometry, haloMaterial)
      halo.position.copy(stage.position)
      group.add(halo)
      halos.push(halo)
      disposables.push(haloMaterial)

      const labelTexture = createLabelTexture(stage.label, stage.color)
      const labelMaterial = new THREE.SpriteMaterial({ map: labelTexture, transparent: true, depthWrite: false })
      const label = new THREE.Sprite(labelMaterial)
      label.scale.set(1.7, 0.42, 1)
      label.position.copy(stage.position).add(stage.labelOffset)
      group.add(label)
      labelSprites.push(label)
      disposables.push(labelTexture, labelMaterial)
    })

    // Loop direccional: Pensar → Actuar → Observar → Pensar, con arcos
    // curvados hacia afuera del centro (para que se lea como flujo, no líneas rectas).
    const centroid = new THREE.Vector3(0, 0, 0)
    const curves: THREE.QuadraticBezierCurve3[] = []
    for (let i = 0; i < STAGES.length; i++) {
      const start = STAGES[i].position
      const end = STAGES[(i + 1) % STAGES.length].position
      const mid = start.clone().add(end).multiplyScalar(0.5)
      const outward = mid.clone().sub(centroid).normalize().multiplyScalar(0.55)
      const control = mid.add(outward)
      curves.push(new THREE.QuadraticBezierCurve3(start, control, end))
    }

    const arrowColor = '#c4b5fd'
    const coneGeometry = new THREE.ConeGeometry(0.09, 0.24, 12)
    disposables.push(coneGeometry)

    curves.forEach((curve) => {
      const tubeGeometry = new THREE.TubeGeometry(curve, 24, 0.028, 8, false)
      const tubeMaterial = new THREE.MeshBasicMaterial({ color: arrowColor, transparent: true, opacity: 0.6 })
      const tube = new THREE.Mesh(tubeGeometry, tubeMaterial)
      group.add(tube)
      disposables.push(tubeGeometry, tubeMaterial)

      const arrowPoint = curve.getPointAt(0.88)
      const tangent = curve.getTangentAt(0.88).normalize()
      const coneMaterial = new THREE.MeshBasicMaterial({ color: arrowColor })
      const cone = new THREE.Mesh(coneGeometry, coneMaterial)
      cone.position.copy(arrowPoint)
      cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tangent)
      group.add(cone)
      disposables.push(coneMaterial)
    })

    // Pulso viajero — recorre el loop completo y "activa" (agranda/ilumina)
    // el nodo más cercano en cada instante.
    const pulseGeometry = new THREE.SphereGeometry(0.11, 16, 16)
    const pulseMaterial = new THREE.MeshBasicMaterial({ color: '#a855f7' })
    const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial)
    group.add(pulse)
    disposables.push(pulseGeometry, pulseMaterial)

    const glowTexture = createGlowTexture()
    const glowMaterial = new THREE.SpriteMaterial({
      map: glowTexture,
      transparent: true,
      depthWrite: false,
    })
    const glow = new THREE.Sprite(glowMaterial)
    glow.scale.set(1.1, 1.1, 1)
    group.add(glow)
    disposables.push(glowTexture, glowMaterial)

    let frameId: number
    const clock = new THREE.Clock()
    const CYCLE_SECONDS = 5

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      const dt = clock.getDelta()

      // Posición del pulso a lo largo del loop (3 tramos iguales).
      const loopT = (t % CYCLE_SECONDS) / CYCLE_SECONDS
      const segment = Math.min(Math.floor(loopT * curves.length), curves.length - 1)
      const localT = loopT * curves.length - segment
      const pulsePos = curves[segment].getPointAt(localT)
      pulse.position.copy(pulsePos)
      glow.position.copy(pulsePos)

      // Cada nodo se activa (escala + halo más visible) según qué tan
      // cerca esté el pulso — sin ventanas fijas, solo por distancia real.
      nodes.forEach((node, i) => {
        const dist = node.position.distanceTo(pulsePos)
        const activation = Math.max(0, 1 - dist / 1.15)
        const scale = 1 + activation * 0.4
        node.scale.setScalar(scale)
        node.rotation.x += dt * (0.2 + i * 0.05)
        node.rotation.y += dt * (0.25 + i * 0.05)
        halos[i].scale.setScalar(scale)
        ;(halos[i].material as THREE.MeshBasicMaterial).opacity = 0.18 + activation * 0.35
        labelSprites[i].scale.set(1.7 + activation * 0.15, 0.42 + activation * 0.04, 1)
      })

      // Rotación sutil de todo el grupo — le da profundidad sin distraer
      // del mensaje (el ciclo se lee de frente la mayor parte del tiempo).
      group.rotation.y = Math.sin(t * 0.12) * 0.18
      group.rotation.x = Math.sin(t * 0.08) * 0.05

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
      disposables.forEach((d) => d.dispose())
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}
