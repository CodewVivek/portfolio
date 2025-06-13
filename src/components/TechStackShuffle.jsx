// src/components/TechStackShuffle.jsx
import React, { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import {
    Atom,
    Database,
    Server,
    Wind,
    Shuffle,
    Github,
    Coffee,
} from "lucide-react"

// Stack 1
const stack1 = [
    { name: "ReactJs", icon: Atom, color: "#61DAFB", bgColor: "rgba(97, 218, 251, 0.13)" },
    { name: "Node.Js", icon: Server, color: "#8CC84B", bgColor: "rgba(140, 200, 75, 0.13)" },
    { name: "MySQL", icon: Database, color: "#4479A1", bgColor: "rgba(68, 121, 161, 0.13)" },
    { name: "Tailwind CSS", icon: Wind, color: "#06B6D4", bgColor: "rgba(6, 182, 212, 0.13)" },
]

// Stack 2
const stack2 = [
    { name: "MongoDB", icon: Database, color: "#47A248", bgColor: "rgba(71, 162, 72, 0.2)" },
    { name: "GitHub", icon: Github, color: "#F5F5F5", bgColor: "rgba(245, 245, 245, 0.15)" },
    { name: "Java", icon: Coffee, color: "#ED8B00", bgColor: "rgba(237, 139, 0, 0.2)" },
    { name: "Express.js", icon: Server, color: "#FFFFFF", bgColor: "rgba(255, 255, 255, 0.15)" },
]

export default function TechStackShuffle() {
    const [currentStack, setCurrentStack] = useState(stack1)
    const [order, setOrder] = useState([...stack1])
    const [isAnimating, setIsAnimating] = useState(false)
    const [isStack2, setIsStack2] = useState(false)

    // Shuffle function
    const shuffleCards = useCallback(() => {
        setOrder([...currentStack].sort(() => Math.random() - 0.5))
    }, [currentStack])

    // Handle shuffle + switch stack
    const handleManualShuffle = () => {
        if (isAnimating) return
        setIsAnimating(true)

        const container = document.querySelector("#tech-container")
        if (container) {
            container.classList.add("animate-out")

            setTimeout(() => {
                if (!isStack2) {
                    setCurrentStack(stack2)
                    setIsStack2(true)
                } else {
                    setCurrentStack(stack1)
                    setIsStack2(false)
                }

                setTimeout(() => {
                    container.classList.remove("animate-out")
                    setIsAnimating(false)
                }, 300)
            }, 300)
        }
    }

    useEffect(() => {
        setOrder([...currentStack].sort(() => Math.random() - 0.5))
    }, [currentStack])

    useEffect(() => {
        const timeout = setTimeout(() => shuffleCards(), 15000)
        return () => clearTimeout(timeout)
    }, [order, shuffleCards])

    return (
        <div style={pageContainer}>
            <ul id="tech-container" style={container} className="stack-container">
                {order.map((tech, index) => {
                    const Icon = tech.icon
                    return (
                        <motion.li
                            key={`${tech.name}-${index}-${isStack2 ? "2" : "1"}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                                delay: index * 0.1,
                            }}
                            layout
                            style={{
                                ...item,
                                backgroundColor: tech.bgColor,
                                border: `1px solid ${isStack2 ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.1)"}`,
                                boxShadow: isStack2 ? "0 4px 12px rgba(0,0,0,0.3)" : "0 4px 6px rgba(0,0,0,0.1)",
                            }}
                        >
                            <div style={cardContent}>
                                <Icon size={36} color={tech.color} strokeWidth={1.5} />
                                <span style={{ ...techName, color: "white" }}>{tech.name}</span>
                            </div>
                        </motion.li>
                    )
                })}
            </ul>

            <button
                onClick={handleManualShuffle}
                disabled={isAnimating}
                className={isAnimating ? "spin-animation" : ""}
                style={{
                    ...shuffleButton,
                    backgroundColor: isStack2 ? "#8B5CF6" : "#FACC15",
                    color: isStack2 ? "white" : "black",
                    opacity: isAnimating ? 0.7 : 1,
                }}
            >
                <Shuffle size={18} />
                <span>Shuffle</span>
            </button>
        </div>
    )
}

// Styles
const pageContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,

}

const container = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 30,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
}

const item = {
    width: 100,
    height: 100,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(6px)",

}

const cardContent = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
}

const techName = {
    fontSize: 14,
    fontWeight: 500,
}

const shuffleButton = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 16px",
    borderRadius: 8,
    fontWeight: 500,
    cursor: "pointer",
    border: "none",
    transition: "all 0.2s ease",
    marginTop: 5,
}
