import { motion } from '@vueuse/motion'

export const useAnimations = () => {
    const fadeIn = (delay = 0) => {
        return motion({
            initial: { opacity: 0 },
            enter: {
                opacity: 1,
                transition: {
                    delay
                }
            }
        })
    }

    const slideInFromLeft = (delay = 0) => {
        return motion({
            initial: { opacity: 0, x: -50 },
            enter: {
                opacity: 1,
                x: 0,
                transition: {
                    delay
                }
            }
        })
    }

    const slideInFromRight = (delay = 0) => {
        return motion({
            initial: { opacity: 0, x: 50 },
            enter: {
                opacity: 1,
                x: 0,
                transition: {
                    delay
                }
            }
        })
    }

    const slideInFromBottom = (delay = 0) => {
        return motion({
            initial: { opacity: 0, y: 50 },
            enter: {
                opacity: 1,
                y: 0,
                transition: {
                    delay
                }
            }
        })
    }

    const scaleIn = (delay = 0) => {
        return motion({
            initial: { opacity: 0, scale: 0.8 },
            enter: {
                opacity: 1,
                scale: 1,
                transition: {
                    delay
                }
            }
        })
    }

    return {
        fadeIn,
        slideInFromLeft,
        slideInFromRight,
        slideInFromBottom,
        scaleIn
    }
}