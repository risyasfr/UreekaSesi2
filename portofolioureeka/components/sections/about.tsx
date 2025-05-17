import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `I'm a Computer Science student with a growing passion for web development and intelligent systems.
I’m constantly learning and love exploring the intersection between software engineering and smart systems. 
Currently diving into full-stack web development and experimenting with real-time data processing.
`;

export default function About(){
    return(
        <section 
        id="about" 
        className="bg-black flex flex-col justify-center items-center gap-10 p-24">
            <h2 className="text-white text-4xl font-bold">About Me</h2>
            <TextGenerateEffect words={words} />
        </section>
    )
}