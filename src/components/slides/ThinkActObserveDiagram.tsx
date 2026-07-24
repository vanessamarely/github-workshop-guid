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

type IconKind = 'think' | 'act' | 'observe'

const STAGES: Array<{
  label: string
  color: string
  icon: IconKind
  position: THREE.Vector3
  labelOffset: THREE.Vector3
}> = [
  { label: '1. Pensar', color: '#7c3aed', icon: 'think', position: new THREE.Vector3(0, 1.05, 0), labelOffset: new THREE.Vector3(0, 0.85, 0) },
  { label: '2. Actuar', color: '#c026d3', icon: 'act', position: new THREE.Vector3(0.95, -0.55, 0), labelOffset: new THREE.Vector3(0.15, -0.85, 0) },
  { label: '3. Observar', color: '#6d28d9', icon: 'observe', position: new THREE.Vector3(-0.95, -0.55, 0), labelOffset: new THREE.Vector3(-0.15, -0.85, 0) },
]

/**
 * Ícono por etapa, dibujado a mano con primitivas de canvas (nunca un logo o
 * ícono de terceros) — para que cada nodo comunique qué representa, no solo
 * "una bola de color": foco = idea (Pensar), rayo = ejecución (Actuar),
 * ojo = revisar el resultado (Observar).
 */
function createIconTexture(kind: IconKind): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#ffffff'
  ctx.strokeStyle = '#ffffff'
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  if (kind === 'think') {
    // Foco: rayos de idea + bombilla + base. Desplazado +39 en y para que
    // el conjunto (rayos a base) quede centrado verticalmente en el canvas.
    ctx.lineWidth = 9
    ;[[128, 65, 128, 43], [88, 79, 72, 59], [168, 79, 184, 59]].forEach(([x1, y1, x2, y2]) => {
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    })
    ctx.beginPath()
    ctx.arc(128, 139, 56, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillRect(104, 187, 48, 26)
  } else if (kind === 'act') {
    // Rayo: ejecución, algo pasa.
    ctx.beginPath()
    ctx.moveTo(150, 26)
    ctx.lineTo(84, 140)
    ctx.lineTo(126, 140)
    ctx.lineTo(100, 230)
    ctx.lineTo(178, 108)
    ctx.lineTo(134, 108)
    ctx.closePath()
    ctx.fill()
  } else {
    // Ojo: mirar/revisar el resultado.
    ctx.lineWidth = 15
    ctx.beginPath()
    ctx.moveTo(36, 128)
    ctx.quadraticCurveTo(128, 52, 220, 128)
    ctx.quadraticCurveTo(128, 204, 36, 128)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(128, 128, 24, 0, Math.PI * 2)
    ctx.fill()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

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
    const iconSprites: THREE.Sprite[] = []

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

      // Ícono al frente del nodo (depthTest off para que nunca quede
      // tapado por la propia esfera al rotar).
      const iconTexture = createIconTexture(stage.icon)
      const iconMaterial = new THREE.SpriteMaterial({
        map: iconTexture,
        transparent: true,
        depthTest: false,
        depthWrite: false,
      })
      const icon = new THREE.Sprite(iconMaterial)
      icon.scale.set(0.46, 0.46, 1)
      icon.position.copy(stage.position)
      icon.position.z += 0.5
      group.add(icon)
      iconSprites.push(icon)
      disposables.push(iconTexture, iconMaterial)
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

    // Estela detrás del pulso — refuerza que esto es un flujo continuo con
    // una dirección, no solo puntos saltando de nodo en nodo.
    const TRAIL_COUNT = 8
    const TRAIL_STRIDE = 4
    const trailGeometry = new THREE.SphereGeometry(0.06, 10, 10)
    disposables.push(trailGeometry)
    const trailDots: THREE.Mesh[] = []
    for (let i = 0; i < TRAIL_COUNT; i++) {
      const trailMaterial = new THREE.MeshBasicMaterial({ color: '#a855f7', transparent: true, opacity: 0 })
      const dot = new THREE.Mesh(trailGeometry, trailMaterial)
      dot.visible = false
      group.add(dot)
      trailDots.push(dot)
      disposables.push(trailMaterial)
    }
    const posHistory: THREE.Vector3[] = []
    const MAX_HISTORY = TRAIL_COUNT * TRAIL_STRIDE + 1

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

      // Estela: guarda posiciones pasadas del pulso y las muestra cada vez
      // más tenues/pequeñas mientras más viejas son.
      posHistory.unshift(pulsePos.clone())
      if (posHistory.length > MAX_HISTORY) posHistory.length = MAX_HISTORY
      trailDots.forEach((dot, i) => {
        const idx = (i + 1) * TRAIL_STRIDE
        if (idx < posHistory.length) {
          dot.visible = true
          dot.position.copy(posHistory[idx])
          const fade = 1 - i / TRAIL_COUNT
          ;(dot.material as THREE.MeshBasicMaterial).opacity = fade * 0.5
          dot.scale.setScalar(fade)
        } else {
          dot.visible = false
        }
      })

      // Cada nodo se activa (escala + halo + ícono más visibles) según qué
      // tan cerca esté el pulso — sin ventanas fijas, solo por distancia real.
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
        const iconScale = 0.46 * (1 + activation * 0.3)
        iconSprites[i].scale.set(iconScale, iconScale, 1)
        ;(iconSprites[i].material as THREE.SpriteMaterial).opacity = 0.8 + activation * 0.2
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
