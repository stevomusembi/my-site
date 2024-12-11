"use client"

import Image from "next/image"


export default function About() {
    const name = "Steven"

    return (
        <main className=" lg:m-4 xl:m-12 m-2 xl:py-32 lg:py-4 py-8 px-8 xl:px-20 lg:px-8 flex md:flex-wrap flex-wrap items-center justify-center flex-row" >
            <Image
                src='/myPic.JPEG'
                width={500}
                height={500}
                alt="Picture of Steven"
                className="max-w-[50%] max-h-[50%] lg:max-w-[50%] lg:max-h-[50%] md:max-w-[70%] md:max-h-[70%] shadow-lg"
            />

            <div className="lg:w-1/2  bg-brown xl:py-64 lg:py-28 xl:px-24 lg:px-12 h-6/6 text-gray-950 shadow-lg" >
                <div className="flex  flex-col justify-center items-center p-4">
                    <h2 className="lg:text-6xl text-4xl my-3 font-bold text-center lg:py-8 py-4	 ">Hello I'm <span className="text-blue-500 font-bold">  {name} </span></h2>
                    <p className="leading-6 mb-5 text-base text-neutral-950 tracking-wider" >
                        I am a <span className="text-blue-500 font-bold">  Software Engineer </span> based in <span className="text-blue-500 font-bold">Raleigh NC, </span> with over two years of experience as a software engineer building front-end experiences for Meliora Technologies and 1 year as a software developer  with I3 Technologies building customised solutions to our clients

                    </p>
                    <p className="leading-6 text-base  text-neutral-950 tracking-wider">  I enjoy discovering how things work, merging my technical ability to deliver great user interfaces and the process of learning new technologies that I can apply to my workand personal projects..</p>
                </div>
            </div>


        </main>
    )
}