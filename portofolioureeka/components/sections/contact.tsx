"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Mail } from "lucide-react";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <section id="contact"
    className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md gap-5">
        <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FFFFFF"
            />
        </div>
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
            Contact Information
        </h1>
        <link href={"mailto:risyasfr@gmail.com"} className="z-10">
            <Button size={"lg"}>
                Send me an Email <Mail className="size-5 ml-2"/>
            </Button>
        </link>
    </section>
  );
}
