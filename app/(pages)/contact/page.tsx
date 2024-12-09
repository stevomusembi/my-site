"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
    const contactInfo = [
        { Name: "Location", name: "Raleigh NC", icon: faLocationDot },
        { Name: "Email", name: "musembisteven@gmail.com", icon: faEnvelope, link: "mailto:musembisteven@gmail.com" },
        { Name: "LinkedIn", name: "Steven Musembi", icon: faLinkedinIn, link: "https://www.linkedin.com/in/stevenmusembi" },
        { Name: "Github", name: "Stevomusembi", icon: faGithub, link: "https://github.com/stevomusembi" },
    ];

    return (

        <main className="mt-12">
            <div className="bg-brown px-4 py-12 mb-5">
                <h1 className="text-center text-blue-500 lg:text-4xl text-xl font-bold mt-8">
                    Contact
                </h1>
                <div className="flex justify-start md:justify-center p-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mt-5 py-4 px-4">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="p-2 lg:p-8 cursor-pointer" >
                                <div className="flex items-center m-2">
                                    <FontAwesomeIcon icon={info.icon} className=" text-gray-800 text-2xl lg:text-4xl mr-3" />
                                    <span className="flex flex-col">
                                        <span className="font-bold text-xs lg:text-xl">{info.Name}</span>
                                        {info.link ? (
                                            <a href={info.link} className="text-xs lg:text-lg " target="_blank" rel="noopener noreferrer">
                                                {info.name}
                                            </a>
                                        ) : (
                                            <span className="text-xs lg:text-lg">{info.name}</span>
                                        )}
                                    </span>
                            </div>
                            </div>
                        ))}
                </div>
            </div>

        </div>
        </main >
    )
}