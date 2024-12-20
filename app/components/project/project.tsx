
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons"
import { useRouter } from "next/navigation";
import { ProjectType } from "@/app/global";

export default function Project(project: ProjectType) {
    const router = useRouter();
    const handleLinkClick = (id: string) => {
        router.push(`/projects/${id}`);
    };
    return (
        <div className="p-2 lg:p-8">
            <div className="flex flex-col md:flex-row m-2 p-4 bg-gray-100 shadow-2xl md:mt-2 min-h-80 max-w-5xl cursor-pointer" onClick={() => handleLinkClick(project._id)} >

                <Image
                    src={project.image}
                    width={500}
                    height={500}
                    alt="Picture of project"
                    className="shadow-lg"


                />

                <div className="flex flex-col md:w-1/2 md:pl-4 py-2 px-2 text-gray-700 mt-4 md:mt-0 relative">
                    <div className="flex flex-col justify-between md:mb-auto " >
                        <span className="font-bold text-xl">{project.title}</span>
                        <span className="mt-2 leading-7  text-base  text-neutral-950 tracking-wider">{project.description}</span>
                    </div>
                    <div className="flex  mt-4 space-x-4 absolute bottom-0 right-0 max-lg:hidden">
                        <a href={project.githubLink} className=" hover:text-blue-800 cursor-pointer" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </a>
                        <a href={project.link} className=" hover:text-blue-800 cursor-pointer" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEye} /> Live Link
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}