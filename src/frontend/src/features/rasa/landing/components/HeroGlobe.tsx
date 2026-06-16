import { useEffect, useMemo, useRef, useState } from 'react'
import Globe from 'react-globe.gl'

type ArcDatum = {
  startLat: number
  startLng: number
  endLat: number
  endLng: number
  color: string
  order: number
}

type RingDatum = {
  lat: number
  lng: number
  maxR: number
  propagationSpeed: number
  repeatPeriod: number
  color: string
}

type PointDatum = {
  lat: number
  lng: number
  size: number
  color: string
}

const isReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const buildArcPoints = (): ArcDatum[] => {
  const base: Array<[number, number, number, number, string]> = [
    [34, -18, 48, 54, '#67e8f9'],
    [42, 12, -12, 96, '#b24cff'],
    [8, 35, 38, -42, '#5b5cff'],
    [18, -80, 48, 104, '#67e8f9'],
    [-12, 52, 22, -96, '#b24cff'],
    [5, 0, 58, 110, '#5b5cff'],
    [46, -110, 18, -24, '#67e8f9'],
    [-24, 32, 28, 10, '#b24cff'],
    [16, -142, -10, 54, '#7dd3fc'],
    [52, -22, -18, 78, '#8b5cf6'],
    [-28, -16, 36, 116, '#67e8f9'],
    [4, 88, 46, -126, '#5b5cff'],
  ]

  return base.map(([startLat, startLng, endLat, endLng, color], order) => ({
    startLat,
    startLng,
    endLat,
    endLng,
    color,
    order,
  }))
}

const buildRingPoints = (): RingDatum[] => [
  { lat: 10, lng: 12, maxR: 3.5, propagationSpeed: 1.4, repeatPeriod: 1800, color: '#67e8f9' },
  { lat: -8, lng: 86, maxR: 3.1, propagationSpeed: 1.1, repeatPeriod: 2200, color: '#b24cff' },
  { lat: 42, lng: -54, maxR: 3.3, propagationSpeed: 1.2, repeatPeriod: 2000, color: '#5b5cff' },
  { lat: 24, lng: -118, maxR: 3.9, propagationSpeed: 1.05, repeatPeriod: 2500, color: '#7dd3fc' },
]

const buildPoints = (): PointDatum[] => {
  const continents: Array<[number, number, number, string]> = [
    [39, -98, 2.4, '#67e8f9'],
    [44, 12, 2.0, '#5b5cff'],
    [30, 44, 1.8, '#b24cff'],
    [13, 77, 2.2, '#67e8f9'],
    [-25, 134, 1.8, '#b24cff'],
    [1, 103, 1.8, '#67e8f9'],
    [-15, -47, 1.9, '#5b5cff'],
    [51, -0.1, 2.0, '#67e8f9'],
    [35, 139, 2.1, '#b24cff'],
    [23, -102, 1.9, '#67e8f9'],
    [54, 30, 1.9, '#b24cff'],
    [-34, -58, 1.8, '#5b5cff'],
    [20, -18, 1.7, '#7dd3fc'],
    [-4, 28, 1.6, '#8b5cf6'],
  ]

  const points: PointDatum[] = []
  continents.forEach(([lat, lng, size, color]) => {
    for (let i = 0; i < 120; i += 1) {
      points.push({
        lat: lat + (Math.random() - 0.5) * 10,
        lng: lng + (Math.random() - 0.5) * 14,
        size: size * (0.34 + Math.random() * 0.86),
        color,
      })
    }
  })
  return points
}

export const HeroGlobe = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const globeRef = useRef<any>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  const arcData = useMemo(() => buildArcPoints(), [])
  const ringData = useMemo(() => buildRingPoints(), [])
  const pointData = useMemo(() => buildPoints(), [])

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const updateSize = () => {
      setSize({ width: wrapper.clientWidth, height: wrapper.clientHeight })
    }

    updateSize()
    const observer = new ResizeObserver(updateSize)
    observer.observe(wrapper)
    window.addEventListener('resize', updateSize)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  useEffect(() => {
    if (!globeRef.current || isReducedMotion()) return

    const globe = globeRef.current
    globe.pointOfView({ lat: 18, lng: 20, altitude: 2.15 }, 0)

    let raf = 0
    const tick = (time: number) => {
      const altitude = 2.02 + Math.sin(time * 0.00035) * 0.04
      globe.pointOfView({ lat: 18 + Math.sin(time * 0.00018) * 2, lng: 18 + time * 0.005, altitude }, 0)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div ref={wrapperRef} className="rasa-globe-shell" aria-hidden="true">
      <div className="rasa-globe-glow" />
      <div className="rasa-globe-sheen" />
      <Globe
        ref={globeRef}
        width={size.width}
        height={size.height}
        globeImageUrl={null}
        backgroundImageUrl={null}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere
        atmosphereColor="#67e8f9"
        atmosphereAltitude={0.34}
        animateIn
        onGlobeReady={() => {
          const globe = globeRef.current
          if (!globe) return
          globe.controls().autoRotate = true
          globe.controls().autoRotateSpeed = 0.18
          globe.controls().enableZoom = false
          globe.controls().enablePan = false
          globe.controls().enableRotate = false
          globe.globeMaterial().color = '#000000'
          globe.globeMaterial().transparent = true
          globe.globeMaterial().opacity = 0.02
          globe.globeMaterial().emissive = '#06112f'
          globe.globeMaterial().emissiveIntensity = 0.08
          globe.globeMaterial().shininess = 0.02
          globe.renderer().setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
          globe.renderer().setClearColor(0x000000, 0)
        }}
        pointsData={pointData}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude={(d: any) => (d as PointDatum).size * 0.01}
        pointRadius={(d: any) => (d as PointDatum).size * 0.03}
        pointResolution={4}
        pointLabel={() => ''}
        pointsMerge={false}
        arcsData={arcData}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor={(d: any) => [(d as ArcDatum).color, (d as ArcDatum).color]}
        arcAltitude={(d: any) => 0.34 + (d as ArcDatum).order * 0.018}
        arcStroke={1.35}
        arcDashLength={0.18}
        arcDashGap={1.15}
        arcDashInitialGap={(d: any) => (d as ArcDatum).order * 1.05}
        arcDashAnimateTime={3200}
        arcsTransitionDuration={0}
        ringsData={ringData}
        ringLat="lat"
        ringLng="lng"
        ringColor="color"
        ringMaxRadius="maxR"
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"
      />
      <div className="rasa-globe-overlay" />
    </div>
  )
}

export default HeroGlobe
