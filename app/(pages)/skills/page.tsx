"use client"
import Image from "next/image"
import angularIcon from "../../public/angular.svg"
import nextIcon from "../../public/next.svg"
import azureIcon from "../../public/azure.svg"
import bootstrapIcon from "../../public/bootstrap.svg"
import scssIcon from "../../public/scss.svg"
import supabaseIcon from "../../public/supabase.svg"
import nodeIcon from "../../public/node.svg"
import mysqlIcon from "../../public/mysql.svg"
import gitIcon from "../../public/git.svg"
import dockerIcon from "../../public/docker.svg"
import figmaIcon from "../../public/figma.svg"
import tsIcon from "../../public/ts.svg"

export default function Skills() {
    const skills = [
        {src: angularIcon, name: "Angular"},
        {src: nextIcon, name: "Next.js"},
        {src: azureIcon, name: "Azure"},
        {src: bootstrapIcon, name: "Bootstrap"},
        {src: scssIcon, name: "SCSS"},
        {src: supabaseIcon, name: "Supabase"},
        {src: nodeIcon, name: "Node.js"},
        {src: mysqlIcon, name: "MySQL"},
        {src: gitIcon, name: "Git"},
        {src: dockerIcon, name: "Docker"},
        {src: figmaIcon, name: "Figma"},
        {src: tsIcon, name: "TypeScript"},
    ];

    return (
        <main className="m-4 p-8">
            <div className="bg-brown px-4 py-2">
                <h1 className="text-center text-blue-500 lg:text-4xl text-xl font-bold">
                    My Skills
                </h1>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-12 justify-center py-4 px-4 lg:py-32 lg:px-32" >
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="lg:p-4 p-1 flex flex-col items-center m-2 max-w-[50px] max-h-[50px] sm:max-w-[75px] sm:max-h-[75px] md:max-w-[100px] md:max-h-[100px] cursor-pointer"
                        >
                            <Image
                                src={skill.src}
                                width={50}
                                height={50}
                                alt={`Skill ${index + 1}`}
                                className="w-full h-full p-1"
                            />
                            <span className="font-bold text-xs"> {skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
