"use client"
import { useState, useEffect } from "react";
import Spinner from "@/app/components/loadingSpinner/spinner";
import Project from "@/app/components/project/project";


const getProjects = async () => {
    try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


export default function Projects() {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getProjects();
            if (data) {
                setProjects(data.projects);
            }
            setLoading(false);
        };

        fetchProjects();
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
                            {projects.map((project:any, index) => (
                                <><Project key={project.id} {...project} />
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
