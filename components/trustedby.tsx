import React from "react"
import ClientLogos from "./client-logos"
import Testimonials from "./testimonials"

const TrustedBy: React.FC = () => 
    <section className="bg-white min-h-screen text-black flex flex-col justify-center gap-16 md:gap-32">
        <div className="flex-1"></div>
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl mb-10 font-bold text-center">
                <span className="whitespace-nowrap">Our happy customers</span>{' '}
                <span className="whitespace-nowrap">Thankful for each of them</span>
            </h3>

            <ClientLogos />

            <div className="flex flex-col justify-center items-center">
                <div className="container mx-auto lg:max-w-[70%] lg:px-10">
                    <div className=""></div>
                </div>
            </div>
        </div>

        <Testimonials />

        <div className="flex-1 bg-gradient-to-r from-green-500 to-green-700"></div>
    </section>

export default TrustedBy