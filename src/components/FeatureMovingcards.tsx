"use client";
import React from "react";
import { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const content = [
    {
      "quote": "Music is the universal language of mankind, a powerful tool that transcends boundaries, emotions, and cultures.",
      "name": "John Doe",
      "title": "Fundamentals of Music Theory"
    },
    {
      "quote": "Without music, life would be a mistake — a dull, colorless journey devoid of rhythm and harmony.",
      "name": "Jane Smith",
      "title": "Advanced Piano Techniques"
    },
    {
      "quote": "Music gives a soul to the universe, wings to the mind, flight to the imagination, transforming silence into a melody of existence.",
      "name": "Emily Johnson",
      "title": "Introduction to Classical Composition"
    },
    {
      "quote": "Where words fail, music speaks — to the heart, conveying emotions that language often falls short of expressing.",
      "name": "Michael Brown",
      "title": "Modern Music Production"
    },
    {
      "quote": "Music can change the world, it can change people, inspiring us to dream bigger, feel deeper, and connect with one another across time and space.",
      "name": "David Clark",
      "title": "Electronic Music Essentials"
    }
  ]
  


function FeatureMovingcards(){
    return (
        <div className="h-[40rem] w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] pt-10 flex flex-col align-center justify-center">
            <div>
            <h2 className="text-3xl font-bold text-center mb-8">Hear our Harmony: Voice of success</h2>
            </div>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                    items={content}
                    direction="right"
                    speed="slow"
                />
                </div>
            </div>
        </div>
    )
}

export default FeatureMovingcards;