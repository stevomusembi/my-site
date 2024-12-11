"use client"
import { useState, useEffect } from "react";
import Spinner from "@/app/components/loadingSpinner/spinner";
import Project from "@/app/components/project/project";




export default function Projects() {
    const [loading, setLoading] = useState(true);

    const projects = [
        {
            id:1,
            name: "Project One",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image:"/Screenshot.png",
            link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            githubLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",

        }
        , {
            id:2,
            name: "Project Two",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/Screenshot2.png",
            link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            githubLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

        }
        , {
            id:3,
            name: "Project Three",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, volupt Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, volupt",
            image: "/Screenshot3.png",
            link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            githubLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        }
    ];
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <main className="mt-12">
            <div className="bg-brown px-4 py-12 mb-5">
                <h1 className="text-center text-blue-500 lg:text-4xl text-xl font-bold mt-8">
                    Projects
                </h1>
                <div className="flex justify-center items-center" >
                    {loading ? (
                        <Spinner />
                    ) :
                        <div className="lg:p-8">
                            {projects.map((project, index) => (
                                <><Project key={index} {...project} />
                                    {index < projects.length - 1 && (
                                        <hr className="border-b-2 border-blue-300 w-1/6 mt-6 mb-16 mx-auto" />
                                    )}
                                </>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </main>
    );
}
