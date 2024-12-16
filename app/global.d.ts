// types.ts
export interface ProjectType {
    _id: string;
    title: string;
    description: string;
    githubLink: string;
    link: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}

export interface SkillType {
    src: string;
    name: string;
}