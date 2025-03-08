"use client";
import React from "react";

function Footer(){
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:px-8 gap-8">
                <div>
                    <h2>About us</h2>
                    <p>
                        music this music that blah blah something something nothing nothing i don't know anything random to fill space
                    </p>
                </div>
                <div>
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Comments</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Follow US</h2>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Linkedin</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Contact Us</h2>
                    <p>
                        Apartment No. 420 village: Lapataganj , Asguard,Planet: unknown
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
