import React, { useContext, useRef } from 'react'
import skillsCss from '../styles/skills.module.css'
import { ScrollContext } from '../utils/scroll-observer';

const opacityChanger = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo

    if (progress >=0 && progress < 1) return 1
    return 0.2
}

const Skills: React.FC = () => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)
    const totalPages = 3
    let progress = 0

    const { current: elContainer } = refContainer
    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight

        progress = Math.min(totalPages - 0.3, Math.max(0.3, percentY * totalPages))
    }
    
    return (
        <div ref={refContainer} className="bg-black text-emerald-400">
            <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-5xl md:text-6xl lg:text-8xl font-semibold">
                <div className='leading-[1.15]'>
                    <div className={skillsCss.skillText} style={{
                        opacity: opacityChanger(progress, 0)
                    }}>Kenton Web Agency</div>
                        <span className={`${skillsCss.skillText} inline-block after:content-['_']`} style={{
                        opacity: opacityChanger(progress, 1)
                    }}>Digital communication agency, website creation from Caen, France for anyone in the World</span>
                        
                        <span className={`${skillsCss.skillText} inline-block`} style={{
                        opacity: opacityChanger(progress, 2)
                    }}>The web agency Kenton cultivates since 2019 a passion for the web, the creation of website, graphics, new technologies and work done to the pixel!</span>
                </div>
            </div>
        </div>
    )
}

export default Skills