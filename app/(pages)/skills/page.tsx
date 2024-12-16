"use client"
import { useEffect, useState } from "react"
import Spinner from "@/app/components/loadingSpinner/spinner"
import Skill from "@/app/components/skill/skill"

export default function Skills() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const skills = [
        { src: "/angular.svg", name: "Angular" },
        { src: "/next.svg", name: "Next.js" },
        { src: "/azure.svg", name: "Azure" },
        { src: "/bootstrap.svg", name: "Bootstrap" },
        { src: "/scss.svg", name: "SCSS" },
        { src: "/supabase.svg", name: "Supabase" },
        { src: "/node.svg", name: "Node.js" },
        { src: "/mysql.svg", name: "MySQL" },
        { src: "/git.svg", name: "Git" },
        { src: "/docker.svg", name: "Docker" },
        { src: "/figma.svg", name: "Figma" },
        { src: "/ts.svg", name: "TypeScript" },
    ];

    return (
        <main className="mt-12">
            <div className="bg-brown px-4 py-12 mb-5">
                <h1 className="text-center text-blue-500 lg:text-4xl text-xl font-bold mt-8">
                    My Skills
                </h1>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Spinner />
                    </div>
                ) :
                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-12 justify-center py-4 px-4 lg:py-32 lg:px-32" >
                        {skills.map((skill, index) => (
                            <Skill key={index} {...skill} />
                        ))}
                    </div>
                }
            </div>
        </main>
    );
}
