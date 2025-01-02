import Project from "@/app/(models)/project";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        return NextResponse.json({ message: "Success", projects }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}

export async function POST(request:NextRequest) {
    try {
        const body = await request.json();
        const project = new Project({
            title: body.title,
            description: body.description,
            image: body.image,
            link: body.link,
            githubLink: body.githubLink,
        });
        await project.save();
        return NextResponse.json({ message: "Success", project }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}