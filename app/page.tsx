"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"

import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Truck, Users, Building, Shield, Wrench, Cpu, Wifi, Orbit } from "lucide-react"
import Header from "@/components/header"

interface MousePosition {
  x: number
  y: number
}

interface NodeData {
  id: string
  label: string
  color: string
  bgColor: string
  icon: React.ReactNode
  link: string
  size: { width: number; height: number }
  floatSpeed: number
  rotationSpeed: number
}

interface Star {
  id: number
  x: number
  y: number
  z: number
  size: number
  speed: number
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [activeConnections, setActiveConnections] = useState<string[]>([])
  const [stars, setStars] = useState<Star[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Reduced spring config for central core
  const centralSpringConfig = { damping: 50, stiffness: 200 }

  const mouseXSpring = useSpring(mouseX, centralSpringConfig)
  const mouseYSpring = useSpring(mouseY, centralSpringConfig)

  // Transform for 3D perspective
  const rotateX = useTransform(mouseY, [-300, 300], [2, -2])
  const rotateY = useTransform(mouseX, [-300, 300], [-2, 2])

  const nodes: NodeData[] = [
    {
      id: "owner-operators",
      label: "Owner Operators",
      color: "text-cyan-400",
      bgColor: "from-cyan-500/20 to-teal-600/20",
      icon: <Truck className="w-5 h-5" />,
      link: "/who-its-for/owner-operators",
      size: { width: 200, height: 70 },
      floatSpeed: 4,
      rotationSpeed: 0.5,
    },
    {
      id: "fleets",
      label: "Fleets",
      color: "text-pink-400",
      bgColor: "from-pink-500/20 to-rose-600/20",
      icon: <Users className="w-5 h-5" />,
      link: "/who-its-for/fleets",
      size: { width: 160, height: 65 },
      floatSpeed: 3.5,
      rotationSpeed: -0.3,
    },
    {
      id: "associations",
      label: "Associations",
      color: "text-amber-400",
      bgColor: "from-amber-500/20 to-orange-600/20",
      icon: <Building className="w-5 h-5" />,
      link: "/who-its-for",
      size: { width: 190, height: 75 },
      floatSpeed: 5,
      rotationSpeed: 0.7,
    },
    {
      id: "insurance",
      label: "Insurance",
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-indigo-600/20",
      icon: <Shield className="w-5 h-5" />,
      link: "/who-its-for/insurance-companies",
      size: { width: 170, height: 68 },
      floatSpeed: 4.5,
      rotationSpeed: -0.6,
    },
    {
      id: "service-providers",
      label: "Service Providers",
      color: "text-purple-400",
      bgColor: "from-purple-500/20 to-indigo-600/20",
      icon: <Wrench className="w-5 h-5" />,
      link: "/who-its-for/service-providers",
      size: { width: 200, height: 80 },
      floatSpeed: 3,
      rotationSpeed: 0.4,
    },
  ]

  useEffect(() => {
    // Generate stars for space background
    const newStars: Star[] = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 1000,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.5 + 0.1,
    }))
    setStars(newStars)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        setMousePosition({ x, y })
        mouseX.set(x)
        mouseY.set(y)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  useEffect(() => {
    // Simulate active connections cycling
    const interval = setInterval(() => {
      const randomNodes = nodes
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.floor(Math.random() * 2) + 1)
        .map((node) => node.id)
      setActiveConnections(randomNodes)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Fixed connection path calculation using actual DOM element positions
  const getConnectionPath = (nodeIndex: number) => {
    if (!containerRef.current || !circleRef.current || !nodeRefs.current[nodeIndex]) {
      return ""
    }

    const containerRect = containerRef.current.getBoundingClientRect()
    const circleRect = circleRef.current.getBoundingClientRect()
    const nodeRect = nodeRefs.current[nodeIndex]!.getBoundingClientRect()

    // Get positions relative to the container
    const circleCenterX = circleRect.left + circleRect.width / 2 - containerRect.left
    const circleCenterY = circleRect.top + circleRect.height / 2 - containerRect.top
    const circleRadius = 160 // Half of the 320px circle width

    const nodeCenterX = nodeRect.left + nodeRect.width / 2 - containerRect.left
    const nodeCenterY = nodeRect.top + nodeRect.height / 2 - containerRect.top

    // Calculate angle from circle center to node center
    const angle = Math.atan2(nodeCenterY - circleCenterY, nodeCenterX - circleCenterX)

    // Point on the edge of the central circle (towards the node)
    const circleEdgeX = circleCenterX + Math.cos(angle) * circleRadius
    const circleEdgeY = circleCenterY + Math.sin(angle) * circleRadius

    // Point on the left edge of the node
    const nodeEdgeX = nodeRect.left - containerRect.left
    const nodeEdgeY = nodeCenterY

    // Create a straight line between the edges
    return `M ${circleEdgeX} ${circleEdgeY} L ${nodeEdgeX} ${nodeEdgeY}`
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Original Header */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-cyan-500/20">
        <Header />
      </div>

      {/* Page Title - Repositioned for mobile */}
      <div className="absolute top-20 md:top-28 left-1/2 transform -translate-x-1/2 z-40 px-4">
        <motion.h1
          className="text-lg md:text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Explore Our Platform. Choose Your Avatar
        </motion.h1>
        <motion.div
          className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-2 md:mt-3 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>

      <div ref={containerRef} className="min-h-screen bg-black overflow-hidden relative">
        {/* Space Stars Background */}
        <div className="absolute inset-0">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute bg-white rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: star.speed * 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Nebula Background Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-cyan-500/20 via-teal-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Connection Lines - Using DOM element positions */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 255, 255, 0.6)" />
              <stop offset="50%" stopColor="rgba(0, 255, 255, 1)" />
              <stop offset="100%" stopColor="rgba(0, 255, 255, 0.6)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Render all 5 connection lines */}
          {nodes.map((node, index) => (
            <motion.path
              key={`connection-${node.id}`}
              d={getConnectionPath(index)}
              stroke="url(#connectionGradient)"
              strokeWidth="3"
              strokeDasharray="10,5"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: activeConnections.includes(node.id) ? 1 : 0.5,
                strokeWidth: activeConnections.includes(node.id) ? 4 : 3,
                strokeDashoffset: [0, -30],
              }}
              transition={{
                pathLength: { duration: 2, ease: "easeInOut", delay: index * 0.2 },
                opacity: { duration: 0.5 },
                strokeWidth: { duration: 0.3 },
                strokeDashoffset: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
            />
          ))}

          {/* Data Flow Particles on Active Connections */}
          {activeConnections.map((nodeId, index) => {
            const nodeIndex = nodes.findIndex((n) => n.id === nodeId)
            if (nodeIndex === -1) return null

            return (
              <motion.circle
                key={`particle-${nodeId}`}
                r="5"
                fill="cyan"
                filter="url(#glow)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <animateMotion dur="3s" repeatCount="indefinite" path={getConnectionPath(nodeIndex)} />
              </motion.circle>
            )
          })}
        </svg>

        {/* Main Content Container with Max Width */}
        <div className="relative z-20 min-h-screen max-w-7xl mx-auto px-4 md:px-8">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between h-screen pt-20">
            {/* Central AI Core - Left Side */}
            <motion.div
              ref={circleRef}
              className="flex-shrink-0"
              animate={{
                x: mouseXSpring.get() * 0.005,
                y: mouseYSpring.get() * 0.005,
              }}
            >
              <motion.div className="w-80 h-80 relative flex items-center justify-center" whileHover={{ scale: 1.02 }}>
                {/* Orbital Rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                <motion.div
                  className="absolute inset-4 rounded-full border border-blue-400/40"
                  animate={{ rotateZ: -360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                <motion.div
                  className="absolute inset-8 rounded-full border border-purple-400/30"
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                {/* Inner Core */}
                <motion.div
                  className="w-64 h-64 rounded-full bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-sm border border-cyan-400/50 shadow-2xl flex items-center justify-center relative overflow-hidden"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(0, 255, 255, 0.4)",
                      "0 0 50px rgba(0, 255, 255, 0.6)",
                      "0 0 30px rgba(0, 255, 255, 0.4)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="w-full h-full rounded-full"
                      style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.3) 2px, transparent 2px),
                                       radial-gradient(circle at 75% 75%, rgba(0, 255, 255, 0.3) 2px, transparent 2px)`,
                        backgroundSize: "20px 20px",
                      }}
                    />
                  </div>

                  {/* Central Content */}
                  <div className="text-center text-white z-10 relative">
                    <motion.div
                      className="flex items-center justify-center mb-3"
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Cpu className="w-8 h-8 text-cyan-400" />
                    </motion.div>

                    <motion.h1
                      className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                      animate={{
                        textShadow: [
                          "0 0 10px rgba(0, 255, 255, 0.5)",
                          "0 0 20px rgba(0, 255, 255, 0.8)",
                          "0 0 10px rgba(0, 255, 255, 0.5)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      24HR
                    </motion.h1>

                    <motion.div
                      className="flex items-center justify-center gap-2 mb-2"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Orbit className="w-4 h-4 text-yellow-400" />
                      <span className="text-base text-cyan-300 font-medium">NEURAL NETWORK</span>
                      <Orbit className="w-4 h-4 text-yellow-400" />
                    </motion.div>

                    <motion.p
                      className="text-lg font-semibold text-blue-300"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    >
                      DISPATCH CORE
                    </motion.p>

                    <motion.div
                      className="flex items-center justify-center mt-3"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Wifi className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-green-400 ml-2 font-mono">ONLINE</span>
                    </motion.div>
                  </div>

                  {/* Energy Rings */}
                  <motion.div
                    className="absolute inset-6 rounded-full border border-cyan-400/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Network Nodes - Right Side */}
            <div className="flex-shrink-0 space-y-6">
              {nodes.map((node, index) => (
                <motion.div
                  key={node.id}
                  ref={(el) => (nodeRefs.current[index] = el)}
                  className="relative"
                  animate={{
                    x: [0, 8, -4, 0],
                    y: [0, -5, 3, 0],
                  }}
                  transition={{
                    duration: node.floatSpeed,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  whileHover={{
                    scale: 1.05,
                    x: -8,
                  }}
                  onHoverStart={() => setHoveredNode(node.id)}
                  onHoverEnd={() => setHoveredNode(null)}
                >
                  <Link href={node.link}>
                    <motion.div
                      className={`relative bg-gradient-to-br ${node.bgColor} backdrop-blur-sm border border-white/20 shadow-xl cursor-pointer group overflow-hidden`}
                      style={{
                        width: node.size.width,
                        height: node.size.height,
                        borderRadius: "16px",
                      }}
                      animate={{
                        boxShadow: activeConnections.includes(node.id)
                          ? [
                              "0 0 20px rgba(0, 255, 255, 0.3)",
                              "0 0 30px rgba(0, 255, 255, 0.5)",
                              "0 0 20px rgba(0, 255, 255, 0.3)",
                            ]
                          : ["0 10px 25px rgba(0, 0, 0, 0.3)"],
                        borderColor: activeConnections.includes(node.id)
                          ? ["rgba(255, 255, 255, 0.2)", "rgba(0, 255, 255, 0.5)", "rgba(255, 255, 255, 0.2)"]
                          : ["rgba(255, 255, 255, 0.2)"],
                      }}
                      transition={{
                        boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                        borderColor: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                      }}
                    >
                      {/* Holographic Grid Overlay */}
                      <div className="absolute inset-0 opacity-20 rounded-2xl">
                        <div
                          className="w-full h-full rounded-2xl"
                          style={{
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                            backgroundSize: "8px 8px",
                          }}
                        />
                      </div>

                      {/* Node Content */}
                      <div className="absolute inset-0 flex items-center justify-start text-white p-5">
                        <motion.div
                          className={`${node.color} mr-4 flex-shrink-0`}
                          animate={{
                            scale: activeConnections.includes(node.id) ? [1, 1.2, 1] : 1,
                          }}
                          transition={{
                            duration: 2,
                            repeat: activeConnections.includes(node.id) ? Number.POSITIVE_INFINITY : 0,
                          }}
                        >
                          {node.icon}
                        </motion.div>

                        <div className="flex-1">
                          <div className={`text-sm font-bold ${node.color} leading-tight`}>{node.label}</div>
                          <motion.div
                            className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-2"
                            animate={{
                              opacity: activeConnections.includes(node.id) ? [0.3, 1, 0.3] : 0.3,
                              scaleX: activeConnections.includes(node.id) ? [1, 1.2, 1] : 1,
                            }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          />
                        </div>
                      </div>

                      {/* Status Indicator */}
                      <motion.div
                        className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full"
                        animate={{
                          backgroundColor: activeConnections.includes(node.id)
                            ? ["#00ff00", "#00ffff", "#00ff00"]
                            : ["#666666"],
                          scale: activeConnections.includes(node.id) ? [1, 1.3, 1] : 1,
                        }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                      />

                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-600/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredNode === node.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Made Scrollable */}
          <div className="md:hidden flex flex-col items-center min-h-screen pt-32 pb-8 px-4 overflow-y-auto">
            {/* Central AI Core - Mobile - Smaller */}
            <motion.div
              className="flex-shrink-0 mb-8"
              animate={{
                x: mouseXSpring.get() * 0.002,
                y: mouseYSpring.get() * 0.002,
              }}
            >
              <motion.div className="w-48 h-48 relative flex items-center justify-center" whileHover={{ scale: 1.02 }}>
                {/* Orbital Rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                <motion.div
                  className="absolute inset-2 rounded-full border border-blue-400/40"
                  animate={{ rotateZ: -360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                <motion.div
                  className="absolute inset-4 rounded-full border border-purple-400/30"
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                {/* Inner Core */}
                <motion.div
                  className="w-36 h-36 rounded-full bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-sm border border-cyan-400/50 shadow-2xl flex items-center justify-center relative overflow-hidden"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(0, 255, 255, 0.4)",
                      "0 0 30px rgba(0, 255, 255, 0.6)",
                      "0 0 20px rgba(0, 255, 255, 0.4)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  {/* Central Content */}
                  <div className="text-center text-white z-10 relative">
                    <motion.div
                      className="flex items-center justify-center mb-1"
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Cpu className="w-5 h-5 text-cyan-400" />
                    </motion.div>

                    <motion.h1
                      className="text-2xl font-bold mb-1 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                      animate={{
                        textShadow: [
                          "0 0 10px rgba(0, 255, 255, 0.5)",
                          "0 0 20px rgba(0, 255, 255, 0.8)",
                          "0 0 10px rgba(0, 255, 255, 0.5)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      24HR
                    </motion.h1>

                    <motion.div
                      className="flex items-center justify-center gap-1 mb-1"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Orbit className="w-2 h-2 text-yellow-400" />
                      <span className="text-xs text-cyan-300 font-medium">NEURAL NETWORK</span>
                      <Orbit className="w-2 h-2 text-yellow-400" />
                    </motion.div>

                    <motion.p
                      className="text-sm font-semibold text-blue-300"
                      animate={{ y: [0, -1, 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    >
                      DISPATCH CORE
                    </motion.p>

                    <motion.div
                      className="flex items-center justify-center mt-1"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Wifi className="w-2 h-2 text-green-400" />
                      <span className="text-xs text-green-400 ml-1 font-mono">ONLINE</span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Network Nodes - Mobile Grid with Better Spacing */}
            <div className="w-full max-w-sm space-y-4">
              {nodes.map((node, index) => (
                <motion.div
                  key={node.id}
                  className="relative"
                  animate={{
                    x: [0, 2, -1, 0],
                    y: [0, -2, 1, 0],
                  }}
                  transition={{
                    duration: node.floatSpeed,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  onHoverStart={() => setHoveredNode(node.id)}
                  onHoverEnd={() => setHoveredNode(null)}
                >
                  <Link href={node.link}>
                    <motion.div
                      className={`relative bg-gradient-to-br ${node.bgColor} backdrop-blur-sm border border-white/20 shadow-xl cursor-pointer group overflow-hidden w-full h-14`}
                      style={{
                        borderRadius: "12px",
                      }}
                      animate={{
                        boxShadow: activeConnections.includes(node.id)
                          ? [
                              "0 0 15px rgba(0, 255, 255, 0.3)",
                              "0 0 25px rgba(0, 255, 255, 0.5)",
                              "0 0 15px rgba(0, 255, 255, 0.3)",
                            ]
                          : ["0 8px 20px rgba(0, 0, 0, 0.3)"],
                        borderColor: activeConnections.includes(node.id)
                          ? ["rgba(255, 255, 255, 0.2)", "rgba(0, 255, 255, 0.5)", "rgba(255, 255, 255, 0.2)"]
                          : ["rgba(255, 255, 255, 0.2)"],
                      }}
                      transition={{
                        boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                        borderColor: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                      }}
                    >
                      {/* Node Content */}
                      <div className="absolute inset-0 flex items-center justify-start text-white p-4">
                        <motion.div
                          className={`${node.color} mr-3 flex-shrink-0`}
                          animate={{
                            scale: activeConnections.includes(node.id) ? [1, 1.2, 1] : 1,
                          }}
                          transition={{
                            duration: 2,
                            repeat: activeConnections.includes(node.id) ? Number.POSITIVE_INFINITY : 0,
                          }}
                        >
                          {node.icon}
                        </motion.div>

                        <div className="flex-1">
                          <div className={`text-sm font-bold ${node.color} leading-tight`}>{node.label}</div>
                        </div>
                      </div>

                      {/* Status Indicator */}
                      <motion.div
                        className="absolute top-2 right-2 w-2 h-2 rounded-full"
                        animate={{
                          backgroundColor: activeConnections.includes(node.id)
                            ? ["#00ff00", "#00ffff", "#00ff00"]
                            : ["#666666"],
                          scale: activeConnections.includes(node.id) ? [1, 1.3, 1] : 1,
                        }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
