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
import { useEffect, useState } from "react"

export default function Skills() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); 

        return () => clearTimeout(timer);
    }, []);

    const skills = [
        { src: angularIcon, name: "Angular" },
        { src: nextIcon, name: "Next.js" },
        { src: azureIcon, name: "Azure" },
        { src: bootstrapIcon, name: "Bootstrap" },
        { src: scssIcon, name: "SCSS" },
        { src: supabaseIcon, name: "Supabase" },
        { src: nodeIcon, name: "Node.js" },
        { src: mysqlIcon, name: "MySQL" },
        { src: gitIcon, name: "Git" },
        { src: dockerIcon, name: "Docker" },
        { src: figmaIcon, name: "Figma" },
        { src: tsIcon, name: "TypeScript" },
    ];

    return (
        <main className="mt-12">
            <div className="bg-brown px-4 py-12 mb-5">
                <h1 className="text-center text-blue-500 lg:text-4xl text-xl font-bold mt-8">
                    My Skills
                </h1>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div role="status">
                            <svg
                                aria-hidden="true"
                                className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-400 fill-blue-600"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) :
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
                }
            </div>
        </main>
    );
}
