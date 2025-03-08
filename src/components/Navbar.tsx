"use client";

import React, { Children } from "react";
import { useState,ReactNode,FC } from "react";

function Navbar(){
    return(
    <div className="fixed top-4 right-5 left-5 z-30 h-20 bg-black rounded-full md:right-1/4 md:left-1/4">
        <div className="flex items-center justify-center p-3 gap-5 h-full text-sm md:text-lg">
            <FlyoutLink href="/">Home</FlyoutLink>
            <FlyoutLink href="/courses" FlyOutContent={courseContent}>Our Course</FlyoutLink>
            <FlyoutLink href="/contact" FlyOutContent={contactContent}>Contact us</FlyoutLink>
        </div>
    </div>
    )
}

interface FlyoutLinkProps {
    children: ReactNode;
    href: string;
    FlyOutContent?: FC;
}


const FlyoutLink: FC<FlyoutLinkProps> = ({children,href,FlyOutContent})=>{
    const [open,setopen] = useState(false);

    return(
        <div 
        onMouseEnter={()=>setopen(true)}
        onMouseLeave={()=>setopen(false)}>
            <div className="mb-2">
            <a href={href} className="relative text-white">
                {children}
                <span style={{
                    transform: open? "scaleX(1)": "scaleX(0)",
                }}
                className="absolute top-5 left-2 right-2 h-1 origin-left bg-indigo-200 rounded transition-transform duration-300 ease-out"/>
            </a>
            </div>
            {FlyOutContent && ( 
                <div 
                style={{opacity:open?1:0,transition:"opacity 0.3s ease"}} 
                className="absolute top-19 transition-transform duration-300 ease-out z-30 ">
                    <FlyOutContent/>
                </div>
            )}
        </div>
    )
}

const contactContent = ()=>{
    return (
        <div className="bg-black z-30 min-h-40 max-w-9/10 min-w-20 p-4 text-white text-sm/7 rounded-md border border-gray-300 overflow-hidden">
            <p>Mobile : +919887893261</p>
            <p>Mail : abra@gmail.com</p>
        </div>
    )
}

const courseContent = ()=>{
    return(
        <div className="bg-black z-30 min-h-40 max-w-9/10 min-w-20 p-4 text-white rounded-md border border-gray-300 text-sm/7">
            <ul>
                <li><a className="hover:text-gray-400">Music Course</a></li>
                <li><a className="hover:text-gray-400">Song course</a></li>
                <li><a className="hover:text-gray-400">Instrument course</a></li>
                <li><a className="hover:text-gray-400">Note course</a></li>
                <li><a className="hover:text-gray-400">Vocal course</a></li>
            </ul>
        </div>
    )
}

export default Navbar;