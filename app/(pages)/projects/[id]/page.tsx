"use client"
import Image from "next/image";
import Link from "next/link";
import { Github, Eye } from 'lucide-react';
import { useEffect, useState } from "react";
import Spinner from "@/app/components/loadingSpinner/spinner";
import { ProjectType } from "@/app/global";

const getProjects= async () => {
  try {
    const response = await fetch("/api/projects");
    const data = await response.json();
    console.log("called fetch", data)
    return data.projects;
  } catch (error) {
    console.log(error);
  }
}


export default function ProjectDetail( params : ProjectType) {

  const projectID = params._id;
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState<ProjectType | null >(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();
      const projectData = projects.find((proj: ProjectType) => proj._id === projectID);
      setProject(projectData);
      setLoading(false);
    };

    fetchProjects();
  }, [projectID]);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8 bg-brown">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Link href="/projects" className="text-blue-500 hover:underline">
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8 mb-5 bg-brown">
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) :
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl mb-6 font-bold">{project.title}</h1>
          <div className="mb-6">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="rounded-lg "
            />
          </div>
          <p className="mb-6 leading-6 text-base  text-neutral-950 tracking-wider">{project.description}</p>
          <div className="flex space-x-4">
            <Link
              href={project.link || "#"}
              target="_blank"
              className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            > <Eye />
              <span className="ml-2"> View Project</span>
            </Link>
            <Link
              href={project.githubLink || "#"}
              target="_blank"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 flex"
            ><Github />
              <span className="ml-2">GitHub Repository</span>
            </Link>
          </div>
        </div>
      }
    </div>
  )
}