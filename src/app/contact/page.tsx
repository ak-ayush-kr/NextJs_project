"use client";

import React, { FormEvent } from "react";
import { useState } from "react";
import { Meteors } from "@/components/ui/meteors";

function Contacts(){
    const [email,setEmail]=useState("");
    const [msg,setmsg]=useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted:', { email, msg });
    };

    return (
         
                <div className="min-h-screen bg-slate-900 max-w-full">
                    <div className="flex flex-col pt-36 justify-center items-center w-full">
                        <h1 className="text-white text-5xl">Contact Us</h1>
                        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                            We&apos;re here to help with any questions about our courses,
                            programs, or events. Reach out and let us know how we can assist you
                            in your musical journey.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-4/5 md:w-3/5">
                            <input
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="text-white bg-black p-3 border border-slate-700 rounded-md w-full"
                            required/>
                          

                            <textarea
                            value={msg}
                            onChange={(e)=>setmsg(e.target.value)}
                            placeholder="your message"
                            rows={5}
                            className="text-white bg-black p-3 border border-slate-700 rounded-md"
                            required/>

                            <button type="submit" className=" bg-gray-950 p-2 rounded-lg hover:bg-slate-300 hover:text-black">
                                Submit
                            </button>
                        </form>
                        
                    </div>
                    <Meteors number={30} />
                </div>
          );
        
    
}

export default Contacts