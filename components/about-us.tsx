import React from "react";
import Members from './members';

const AboutUs: React.FC = () => {
    return <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl text-black`}>
        <div className="container mx-auto px-11">
            <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
                <strong>We can help you build and ship better web / mobile apps.</strong> <br />
                A strong team will carry your project. 
            </p>
        </div>

        <div className="container mx-auto px-11 text-center mt-28">
            <h2>Our Team (example)</h2>
            <div className="mt-2">&ldquo;Engineering-Team&rdquo;</div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
                <Members id="1" name="Person 1" socialId="@person1" link="https://github.com/1" />
                <Members id="1" name="Person 2" socialId="@person2" link="https://github.com/1" />
                <Members id="1" name="Person 3" socialId="@person3" link="https://github.com/1" />
                <Members id="1" name="Person 4" socialId="@person4" link="https://github.com/1" />
                <Members id="1" name="Person 5" socialId="@person5" link="https://github.com/1" />
            </div>
        </div>
    </section>
}

export default AboutUs