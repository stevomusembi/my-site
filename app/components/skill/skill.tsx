import Image from "next/image"
export default function Skill( skill:any) {
    return (
        <div
            className="lg:p-4 p-1 flex flex-col items-center m-2 max-w-[50px] max-h-[50px] sm:max-w-[75px] sm:max-h-[75px] md:max-w-[100px] md:max-h-[100px] cursor-pointer"
        >
            <Image
                src={skill.src}
                width={50}
                height={50}
                alt={`${skill.name} logo`}
                className="w-full h-full p-1"
            />
            <span className="font-bold text-xs"> {skill.name}</span>
        </div>
    )
}