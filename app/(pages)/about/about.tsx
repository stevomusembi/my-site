"use client"

import Image from "next/image"
import myPic from "../../public/me.JPEG"


export default function About() {
    const name = "Steven Musembi"

    return (
        <main className="min-h-screen flex items-center justify-center flex-row" >

            <Image
                src={myPic}
                width={300}
                height={300}
                alt="Picture of steven"
            />
            <div className="w-1/3 bg-stone-200 p-8 h-5/6">
                <div className="flex  flex-col justify-center items-center">
                    <h4>Hello I am <strong> {name} </strong></h4>
                    <span>
                        I am a Software  Engineer based in ------- with years of experience building front end experiences in Meliora Technologies.I enjoy discovering how things work and the process oflearning new technologies that I can apply to my workand personal projects..
                    </span>
                </div>
            </div>


        </main>
    )
}