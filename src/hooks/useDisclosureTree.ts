import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const MD_BREAKPOINT = 768 // Tailwind md default

export function useDisclosureTree<T extends HTMLElement = HTMLElement>() {
    const [openSet, setOpenSet] = useState<Set<string>>(() => new Set())
    const containerRef = useRef<T | null>(null)

    const isOpen = useCallback((id: string) => openSet.has(id), [openSet])
    const toggle = useCallback((id: string) => {
        setOpenSet(prev => {
            const next = new Set(prev)
            if (next.has(id)) next.delete(id)
            else next.add(id)
            return next
        })
    }, [])
    const closeAll = useCallback(() => setOpenSet(new Set()), [])

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (window.innerWidth >= MD_BREAKPOINT) return
            if (e.key === 'Escape') closeAll()
        }
        const handleClick = (e: MouseEvent) => {
            if (window.innerWidth >= MD_BREAKPOINT) return
            const target = e.target as Node
            if (containerRef.current && !containerRef.current.contains(target as Node)) {
                closeAll()
            }
        }
        const handleResize = () => {
            closeAll()
        }
        document.addEventListener('keydown', handleKey)
        document.addEventListener('click', handleClick)
        window.addEventListener('resize', handleResize)
        return () => {
            document.removeEventListener('keydown', handleKey)
            document.removeEventListener('click', handleClick)
            window.removeEventListener('resize', handleResize)
        }
    }, [closeAll])

    return useMemo(() => ({ containerRef, isOpen, toggle, closeAll }), [closeAll, isOpen, toggle])
}
