"use client"

import { useState, useEffect, useMemo } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine"
import { loadFull } from "tsparticles"

// import { useSlim } from "tsparticles/slim"

const ParticlesContainer = () => {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container)
    }

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: ""
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: {
                        enable: true
                    },
                },
                modes: {
                    push: {
                        quantity: 90
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    }
                },
            },
            particles: {
                color: {
                    value: "#e68e2e",
                },
                links: {
                    color: "#f5d393",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce"
                    },
                    random: false,
                    speed: 1,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 80
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: { min: 1, max: 5 },
                }
            },
            detectRetina: true
        }),
        [],
    )

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
                className="w-full absolute z-0"
            />
        )
    }

    return <></>
}

export default ParticlesContainer