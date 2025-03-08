import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";


function Herosection(){
    return(
        <div className="h-fit md:h-svh w-full flex flex-col items-center justify-center relative md:overflow-hidden">
            <Spotlight
            className="top-20 left-10  md:-top-20 md:left-0"
            fill="white"
            />
            <div className="w-full top-40 text-center p-4 relative md:top-0">
                <h1 className="text-2xl md:text-7xl font-bold mt-30 md:mt-0 bg-gradient-to-b from-neutral-50 to-neutral-400 text-transparent bg-clip-text">Master the art of Music</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">The art of music is a universal language that transcends boundaries, blending melody, harmony, and rhythm to evoke deep emotions, convey stories, and inspire the human spirit. It connects cultures, enriches lives, and offers solace, joy.</p>
                <div className="mt-4">
                    <Link href={'#'}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-black dark:bg-white text-white dark:text-black border-slate-800 dark:border-white"
                        >
                        Explore Course
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Herosection;