"use client"
import { useState, useEffect } from "react";
import Image from "next/image"
import myPic from "../../public/Screenshot.png"
import myPic2 from "../../public/Screenshot2.png"
import myPic3 from "../../public/Screenshot3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons"
import Spinner from "@/app/components/loadingSpinner/spinner";




export default function Projects() {
    const [loading, setLoading] = useState(true);

    const projects = [
        {
            name: "Project One",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: myPic,
            link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            githubLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",

        }
        , {
            name: "Project Two",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: myPic2,
            link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            githubLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

        }
        , {
            name: "Project Three",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, volupt Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, volupt",
            image: myPic3,
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
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                      <Spinner />
                    </div>
                ) :
                    <div className="flex justify-center lg:p-8">
                        <div className="grid grid-cols-1 gap-4 mt-5 py-4 lg:px-4">
                            {projects.map((project, index) => (
                                <div key={index} className="p-2 lg:p-8">
                                    <div className="flex flex-col md:flex-row m-2 p-4 bg-gray-100 shadow-2xl md:mt-2 min-h-80 max-w-5xl" >
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="md:w-1/2 max-w-[100%] max-h-[50%]">
                                            <Image
                                                src={project.image}
                                                width={500}
                                                height={500}
                                                alt="Picture of project"
                                                className="cursor-pointer"
                                            />
                                        </a>
                                        <div className="flex flex-col md:w-1/2 md:pl-4 py-2 px-2 text-gray-700 mt-4 md:mt-0">
                                            <span className="font-bold text-xl">{project.name}</span>
                                            <span className="mt-2 leading-7">{project.description}</span>
                                            <div className="flex mt-4 md:mt-auto space-x-4">
                                                <a href={project.githubLink} className=" hover:text-blue-800 cursor-pointer" target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faGithub} /> GitHub
                                                </a>
                                                <a href={project.link} className=" hover:text-blue-800 cursor-pointer" target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faEye} /> Live Link
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {index < projects.length - 1 && (
                                        <hr className="border-b-2 border-blue-300 w-1/6 mt-16 mx-auto" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </main>
    );
}
