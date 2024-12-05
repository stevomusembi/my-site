"use client"

import Image from "next/image"
import myPic from "../../public/me.JPEG"


export default function About() {
    const name = "Steven"

    return (
        <main className=" m-12 py-32 px-20 flex flex-wrap items-center justify-center flex-row" >

            <Image
                src={myPic}
                width={500}
                height={500}
                alt="Picture of steven"
            />
            <div className="w-1/2 bg-stone-200 py-64 px-24 h-6/6 text-gray-950" >
                <div className="flex  flex-col justify-center items-center">
                    <h2 className="text-6xl my-3 font-bold text-center py-8	 ">Hello I'm {name}</h2>
                    <p className="leading-6 mb-5 text-base text-neutral-950 tracking-wider" >
                        I am a Software Engineer based in Raleigh NC, with 2 years of experience as a software engineer building front-end experiences for Meliora Technologies and 1 year as a software developer  with I3 Technologies building customised solutions to our clients 

                    </p>
                    <p className="leading-6 text-base  text-neutral-950 tracking-wider">  I enjoy discovering how things work, merging my technical ability to deliver great user interfaces and the process of learning new technologies that I can apply to my workand personal projects..</p>
                </div>
            </div>


        </main>
    )
}