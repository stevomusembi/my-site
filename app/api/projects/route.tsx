import Project from "@/app/(models)/project";
import {NextResponse } from "next/server";

export async function GET () {
    try {
        const projects = await Project.find();
        console.log("here are projects", projects);
        return NextResponse.json({message:"Success", projects}, {status: 200})
    } catch(error) {
        return NextResponse.json({message:"Error", error}, {status: 500})
    }
}

export async function POST (){
    try {
        const project = new Project({
            title: "Project One",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image:"/Screenshot.png",
            link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            githubLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        });
        project.save();
        return NextResponse.json({message:"Success", project}, {status: 201})
    } catch(error) {
        return NextResponse.json({message:"Error", error}, {status: 500})
    }
}