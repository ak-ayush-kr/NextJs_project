import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const musicCourses = [
    {
      title: "Beginner Guitar Mastery",
      description: "Learn the basics of guitar playing, including chords, strumming patterns, and simple songs.",
      link: "beginner-guitar-mastery",
      isFeatured: true
    },
    {
      title: "Advanced Piano Techniques",
      description: "Master advanced piano techniques, including arpeggios, scales, and complex compositions.",
      link: "advanced-piano-techniques",
      isFeatured: false
    },
    {
      title: "Music Theory Essentials",
      description: "Understand the fundamentals of music theory, including notes, scales, and chord progressions.",
      link: "music-theory-essentials",
      isFeatured: true
    },
    {
      title: "Electronic Music Production",
      description: "Learn how to create electronic music using digital audio workstations and sound design tools.",
      link: "electronic-music-production",
      isFeatured: false
    },
    {
      title: "Vocal Training for Beginners",
      description: "Improve your singing skills with vocal exercises, breathing techniques, and pitch control.",
      link: "vocal-training-for-beginners",
      isFeatured: true
    }
  ];





function FeatureWebinar(){
    return( 
    <div className="p-12 bg-gray-900">
        <div className="max-x-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-purple-700 font-semibold tracking-wide">FEATURED WEBINARS</h2>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Enhance your musical journey</p>
            </div>
        </div>
        <div>
            <HoverEffect items={musicCourses}/>
        </div>
        <div className="mt-10 text-center">
           <Link href={"/webinar"} className="text-center bg-neutral-200 p-3 rounded-md text-black text-base">View all webinar</Link>
        </div>
    </div>
    )
}

export default FeatureWebinar;