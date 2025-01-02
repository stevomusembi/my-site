"use client"
import { useState, useEffect } from "react";
import Spinner from "@/app/components/loadingSpinner/spinner";
import Project from "@/app/components/project/project";
import { ProjectType } from "@/app/global";


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
    const [projects, setProjects] = useState<ProjectType[]>([]);

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

    const addProject = async () => {
        const response = await fetch("/api/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "Share It Safe",
                description: "Developed a robust web application, Share It Safe, designed to securely upload and share files using Amazon S3. The application generates unique, time-limited links, ensuring that only authorized users with the link can access the uploaded files for a specified duration.\n\n<strong>Technologies and Skills:</strong>\n- Next.js: Utilized for building a dynamic, server-rendered React application, ensuring a seamless user experience.\n- AWS Lambda: Implemented serverless functions to handle backend logic, providing scalability and cost-efficiency.\n- AWS API Gateway: Configured to create, publish, maintain, monitor, and secure APIs at any scale.\n- Amazon S3: Leveraged for secure, scalable, and durable file storage.\n- AWS Amplify: Used for hosting and deploying the application, ensuring continuous integration and delivery.\n\nKey Features:\n- Secure File Upload: Users can upload files securely to Amazon S3.\n- Time-Limited Links: Automatically generates unique, time-limited links for file sharing.\n- Access Control: Ensures only authorized users with the link can access the files within the specified duration.\n\nThis project showcases my ability to integrate various AWS services to build a secure, scalable, and user-friendly web application.",
                image: "/project_two.png",
                link: "https://main.d11rfvatob9clq.amplifyapp.com/",
                githubLink:"https://github.com/stevomusembi/share-it-safe"
            }),
        });
        const data = await response.json();
        if (data) {
            setProjects([...projects, data.project]);
        }
    }

    return (
        <main className="mt-12">
            <div className="bg-brown px-4 py-12 mb-5">
                <span className="flex justify-center items-end">
                    <h1 className="text-center text-blue-500 lg:text-4xl text-xl font-bold mt-8">
                        Projects
                    </h1>
                    <button className="btn rounded px-8 py-2 bg-blue-500 text-white ml-4 hidden" onClick={addProject}> Add Project</button>
                </span>
                <div className="flex justify-center items-center" >
                    {loading ? (
                        <Spinner />
                    ) :
                        <div className="lg:p-8">
                            {projects.map((project:ProjectType, index) => (
                                <><Project key={project._id} {...project} />
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
