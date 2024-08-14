import { useState, useEffect } from 'react'

const breakpoints = {
    xxs: 375,
    xs: 576,
    sm: 768,
    md: 1024,
    lg: 1440,
    xxl: 1920,
    xxxl: 3440,
}

export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState<boolean>(window.matchMedia(query).matches)

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query)

        const handleChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches)
        }

        mediaQueryList.addEventListener('change', handleChange)

        return () => {
            mediaQueryList.removeEventListener('change', handleChange)
        }
    }, [query])

    return matches
}

export const useIsSmallMobile = (): boolean => useMediaQuery(`(max-width: ${breakpoints.xxs}px)`)
export const useIsMobile = (): boolean => useMediaQuery(`(max-width: ${breakpoints.xs}px)`)
export const useIsTablet = (): boolean => useMediaQuery(`(max-width: ${breakpoints.sm}px)`)
export const useIsLaptop = (): boolean =>
    useMediaQuery(`(min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.md}px)`)
export const useIsLargeLaptop = (): boolean =>
    useMediaQuery(`(min-width: ${breakpoints.md + 1}px) and (max-width: ${breakpoints.lg}px)`)
export const useIsDesktop = (): boolean =>
    useMediaQuery(`(min-width: ${breakpoints.lg + 1}px) and (max-width: ${breakpoints.xxl}px)`)
export const useIsLargeDesktop = (): boolean =>
    useMediaQuery(`(min-width: ${breakpoints.xxl + 1}px)`)

export const useIsNotDesktop = (): boolean => useMediaQuery(`(max-width: ${breakpoints.md - 1}px)`)

export const useIsNotMobile = (): boolean => useMediaQuery(`(min-width: ${breakpoints.sm + 1}px)`)

export const useIsNotLaptop = (): boolean =>
    useMediaQuery(`(min-width: ${breakpoints.xxs + 1}px) and (max-width: ${breakpoints.md}px)`)
