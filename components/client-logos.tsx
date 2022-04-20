import React, { useContext, useRef } from "react"
import SliderContainer, { SliderItem } from './slider'
import Image from "next/image"

const ClientLogos: React.FC = () => (
    <>
        <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
            <SliderItem width={150}>
                <Image
                    src="/assets/trustedby/uber.png"
                    width={150}
                    height={100}
                    alt="Uber"
                    objectFit="contain"
                />
            </SliderItem> 

            <SliderItem width={150}>
                <Image
                    src="/assets/trustedby/uber.png"
                    width={150}
                    height={100}
                    alt="Uber"
                    objectFit="contain"
                />
            </SliderItem>

            <SliderItem width={150}>
                <Image
                    src="/assets/trustedby/uber.png"
                    width={150}
                    height={100}
                    alt="Uber"
                    objectFit="contain"
                />
            </SliderItem>

            <SliderItem width={150}>
                <Image
                    src="/assets/trustedby/uber.png"
                    width={150}
                    height={100}
                    alt="Uber"
                    objectFit="contain"
                />
            </SliderItem>

            <SliderItem width={150}>
                <Image
                    src="/assets/trustedby/uber.png"
                    width={150}
                    height={100}
                    alt="Uber"
                    objectFit="contain"
                />
            </SliderItem>


            <SliderItem width={150}>
                <Image
                    src="/assets/trustedby/uber.png"
                    width={150}
                    height={100}
                    alt="Uber"
                    objectFit="contain"
                />
            </SliderItem>

            <SliderItem width={150}>
                <Image
                    src="/assets/trustedby/uber.png"
                    width={150}
                    height={100}
                    alt="Uber"
                    objectFit="contain"
                />
            </SliderItem>
        </SliderContainer>
    </>
)

export default ClientLogos