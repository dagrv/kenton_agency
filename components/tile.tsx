import React, { useRef, useContext } from 'react'
import { ScrollContext } from '../utils/scroll-observer'

interface WrapperProps {
    totalPages: number
}

interface TileContextValue {
    totalPages: number
    currentPage: number
}

export const TileContext = React.createContext<TileContextValue>({
    totalPages: 0,
    currentPage: 0
})

export const TileWrapper: React.FC<WrapperProps> = ({
    children,
    totalPages,
}) => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    let currentPage = 0

    const { current: elContainer } = refContainer

    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
        currentPage = percentY * totalPages
    }

    return (
        <TileContext.Provider value={{totalPages, currentPage}}>
            <div ref={refContainer} className="relative bg-black text-sky-600" style={{
                height: totalPages * 100 + 'vh'
            }}>{children}</div>
        </TileContext.Provider>
    )
}

export const TileBackground: React.FC<WrapperProps> = ({ children }) => (
    <div className='absolute w-full h-full'>{ children }</div>
)

export const TileContent: React.FC<WrapperProps> = ({ children }) => (
    <div className='sticky top-0 h-screen overflow-hidden'>{children}</div>
)

interface Props {
    page: number
    renderContent: (props: { progress: number }) => any
}

export const Tile: React.FC<Props> = ({ page, renderContent }) => {
    const { currentPage, totalPages } = useContext(TileContext)
    const progress = Math.max(0, currentPage - page)
    const refContainer = useRef<HTMLDivElement>(null)

    let opacity = Math.min(1, Math.max(0, progress * 4))
    if (progress > 0.85 && page < totalPages - 1) {
        opacity = Math.max(0, (1.0 - progress) * 4)
    }

    return (
        <div ref={refContainer} className="absolute top-0 w-full"
            style={{ pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined, opacity }}>
            {renderContent({ progress })}
        </div>
    )
}