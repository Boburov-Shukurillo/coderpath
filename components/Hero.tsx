"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
    const cards = [
        {
            title: "HTML Ninja",
            desc: "Build semantic structures like a pro. Quiz your way through HTML elements!",
            btn: "Start HTML",
        },
        {
            title: "CSS Mastermind",
            desc: "Flexbox, grid, animations — sharpen your styling instincts with real challenges.",
            btn: "Start CSS",
        },
        {
            title: "JavaScript Sorcerer",
            desc: "From variables to async magic — test your JS skills with fun mini tasks!",
            btn: "Start JS",
        },
    ];

    const [clickedCard, setClickedCard] = useState<number | null>(null);

    // Hero va card'larni ref qilish uchun useRef
    const heroRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Hero section fadeIn animatsiyasi
        gsap.fromTo(
            heroRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
        );
    }, []);

    return (
        <div className="containerb flex flex-col items-center gap-20 py-20">
            {/* Hero Section */}
            <div
                ref={heroRef}
                className="py-20 w-2/3 text-center flex flex-col gap-10"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                    Unlock Your Full Potential – Your Journey to Mastery Starts Here!
                </h1>
                <p className="text-gray-300 text-lg mb-8">
                    Ready to take your skills to the next level? You’re just a few clicks away from conquering HTML, CSS, and JavaScript like a pro.

                    💡 Why settle for average when you can be extraordinary? Start now and discover your hidden talents with our fun, interactive quizzes.

                    🔥 Challenge yourself, see your progress, and become the coder you’ve always dreamed of – without the overwhelm.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-white/10 border border-white/20 px-6 py-3 rounded-lg backdrop-blur-sm text-white font-medium shadow-md hover:shadow-xl transition-all hover:bg-white/20">
                        🚀 Start Quiz
                    </button>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:opacity-90 transition-all">
                        ✨ Explore Features
                    </button>
                </div>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center p-6">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        ref={(el) => {
                            cardRefs.current[idx] = el; // Assign the element to the ref array
                        }}
                        className="bg-gradient-to-br from-[#2e2e2e] to-[#0f0f0f] p-6 w-full max-w-sm text-white rounded-3xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl duration-300 ease-in-out backdrop-blur-md border border-gray-700"
                    >
                        <h2 className="text-3xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                            {card.title}
                        </h2>
                        <p className="text-gray-300 mb-5 text-sm">{card.desc}</p>
                        <button
                            onClick={() => setClickedCard(idx)}
                            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all hover:opacity-90 font-semibold"
                        >
                            {card.btn}
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Hero;
