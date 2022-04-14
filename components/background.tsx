import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "../utils/scroll-observer";

const Background: React.FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const refContainer = useRef<HTMLDivElement>(null)
    const { scrollY } = useContext(ScrollContext)
    
    let progress = 0

    const { current: elContainer } = refContainer
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }

    const handleImageLoaded = useCallback(() => {
        setImageLoaded(true);
    }, [])

    return (
        <div ref={refContainer}
             className="min-h-screen flex flex-col items-center justify-center sticky top-0 z-10"
             style={{ transform: `translateY(-${progress * 20}vh)` }}>
            
            <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
                <source src="/assets/bg-video.m4v" type="video/mp4; codecs=hvc1" />
                <source src="/assets/bg-video.webm" type="video/webm; codecs=vp9" />
            </video>

            <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
                <Image src="/assets/logo.svg" width={128 / 3} height={114 / 3} alt="logo" />
            </div>
            
            <div className="p-12 font-bold z-10 text-center flex-1 flex items-center justify-center flex-col drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
                <h1 className="text-6xl mb-6 xl:text-5xl">Kenton Web Agency</h1>
                <h2 className="text-2xl mb-2 xl:text-3xl tracking-tight">A group of young people, passionate by <span className="text-blue-500">Web</span> & <span className="text-red-500">Skate</span></h2>
            </div>
            
            <div className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}` }>
                <Image src="/assets/arrow-down.png" width={120 / 3} height={105 / 3} alt="scroll down" onLoad={handleImageLoaded} />
            </div>
        </div>
    )
}

export default Background