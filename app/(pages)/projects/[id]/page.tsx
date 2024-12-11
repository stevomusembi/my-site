"use client"
import Image from "next/image";
import Link from "next/link";
import { Github, Eye, ChevronLeft } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "Project One",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: '/Screenshot.png',
    link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    githubLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",

  }

  , {
    id: 2,
    name: "Project Two",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: '/Screenshot2.png',
    link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    githubLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

  }
  , {
    id: 3,
    name: "Project Three",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, volupt Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, volupt",
    image: '/Screenshot3.png',
    link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    githubLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  }
];
export default function ProjectDetail({ params }: any) {

  const project = projects.find(p => p.id === Number(params.id));
  // console.log(project);
  // Handle case where project is not found
  if (!project) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-500 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8 bg-brown">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl mb-6 font-bold">{project.name}</h1>
        <div className="mb-6">
          <Image
            src={project.image}
            alt={project.name}
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <p className="mb-6">{project.description}</p>
        <div className="flex space-x-4">
          <Link
            href={project.link}
            target="_blank"
            className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          > <Eye />
            <span className="ml-2"> View Project</span>
          </Link>
          <Link
            href={project.githubLink}
            target="_blank"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 flex"
          ><Github />
            <span className="ml-2">GitHub Repository</span>
          </Link>
        </div>
      </div>
    </div>
  )
}