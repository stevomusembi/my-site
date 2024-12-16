"use client"

import Image from "next/image"


export default function About() {
    const name = "Steven"

    return (
        <main className=" lg:m-4 xl:m-12 m-2 xl:py-32 lg:py-4 py-8 px-8 xl:px-20 lg:px-8 flex md:flex-wrap flex-wrap items-center justify-center flex-row" >
            <Image
                src='/me.JPEG'
                width={500}
                height={500}
                className="max-w-[50%] max-h-[50%] lg:max-w-[50%] lg:max-h-[50%] md:max-w-[70%] md:max-h-[70%] shadow-lg"
                alt="Picture of Steven"
            />

            <div className="lg:w-1/2  bg-brown xl:py-64 lg:py-28 xl:px-24 lg:px-12 h-6/6 text-gray-950 shadow-lg" >
                <div className="flex  flex-col justify-center items-center p-4">
                    <h2 className="lg:text-6xl text-4xl my-3 font-bold text-center lg:py-8 py-4	 ">Hello I am <span className="text-blue-500 font-bold">  {name} </span></h2>
                    <p className="leading-6 mb-5 text-base text-neutral-950 tracking-wider" >
                        I am a <span className="text-blue-500 font-bold">Software Engineer </span> based in <span className="text-blue-500 font-bold">Raleigh NC, </span> with over three years of professional experience. At <a className="text-blue-500 underline" target="_blank" rel="noopener noreferrer" href="https://www.meliora.co.ke">Meliora Technologies</a>, I have honed my skills in crafting intuitive and engaging front-end experiences.I also developed customized solutions tailored to our clients unique needs.
                    </p>
                    <p className="leading-6 text-base  text-neutral-950 tracking-wider"> I thrive on the thrill of discovery, constantly exploring how things work. My technical expertise allows me to create seamless user interfaces, while my love for learning new technologies keeps me at the forefront of innovation. Whether it is a professional project or a personal endeavor, I am dedicated to delivering exceptional results.</p>
                </div>
            </div>


        </main>
    )
}