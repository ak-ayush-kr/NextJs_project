"use client";
import Link from "next/link";
import React from "react";
import CourseData from "../data/music_course.json";
import  {BackgroundGradient} from "./ui/background-gradient";

interface Course{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
}

function Featurecourse(){
    const featuredCourse = CourseData.courses.filter((course:Course)=>course.isFeatured);
    return(
    <div className="py-12 bg-gray-900 relative mt-44 md:mt-0">
        <div>
            <div className="text-center">
                <h3 className="text-blue-600 font-semibold text-xl">FEATURE COURSES</h3>
                <p className="mt-3 text-2xl font-bold text-white sm:text-4xl">Learn with the best</p>
            </div>
        </div>
        <div className="mt-10 m-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourse.map((course:Course)=>(
                    <div key={course.id} className="flext justify-center">
                        <BackgroundGradient className="flext flext-col rounded-[22px] bg-zinc-900 overflow-hidden h-full max-w-full">
                            <div className="p-4 sm:p-6 flext flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-neutral-200"> {course.title} </p>
                                <p className="text-sm text-neutral-400 flex-grow mt-4 mb-4"> {course.description}</p>
                                <Link href={`/courses/${course.slug}`}>Learn More</Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="text-center mt-10">
            <Link href={"/courses"} className="bg-white text-black text-base p-3 rounded-md">
                view all courses
            </Link>
        </div>
    </div>
    )
};

export default Featurecourse;