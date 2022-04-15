import React, { useRef, useContext } from 'react'
import Image from 'next/image'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from './work'

const Works = () => (
    <TileWrapper totalPages={3}>
        <TileBackground>
            <WorkBackground />
        </TileBackground>
        
        <TileContent>
            <Tile
                page={0}
                renderContent={({ progress }) => ( 
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div>Realisations 1</div>
                            <div className="text-6xl md:text-6xl font-semibold">
                                <WorkLink href="https://apps.apple.com/us/app/twisto/id592996452?l=fr&ls=1">TWISTO</WorkLink>
                            </div>
                        </WorkLeft>

                        <WorkRight progress={progress}>
                            <Image src="/assets/twisto.png" className='rounded-2xl shadow-xl' layout="responsive" width={840} height={1620} alt="Twisto" />
                        </WorkRight>
                    </WorkContainer>
                )}>
            </Tile>

            <Tile
                page={1}
                renderContent={({ progress }) => ( 
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div className="text-red-500">Realisations 2</div>
                            <div className="text-6xl md:text-6xl font-semibold text-red-500">SM CAEN</div>
                        </WorkLeft>

                        <WorkRight progress={progress}>
                            <Image src="/assets/smcaen.png" className='rounded-2xl shadow-xl' layout="responsive" width={720} height={1400} alt="SMCaen" />
                        </WorkRight>
                    </WorkContainer>
                )}>
            </Tile>
        </TileContent>
    </TileWrapper>
)

export default Works