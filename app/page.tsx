"use client";

import React from "react";
import Navbar from "../components/Navigation";
import Hero from "../components/HeroSection";
import Projects from "../components/ProjectsGrid";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
// import About from "../app/about/page.tsx";
// import Contact from "../app/Contact";
// import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="flex-grow">
        <Hero />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      About Section
      <section id="about">
        <AboutPage />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactPage />
      </section>

      
    </main>
  );
}






















// import Navbar from '../components/Navbar';
// import Link from 'next/link'

// export default function Home(){
//   return(
//     <>
//       <Navbar />
//       <main className='w-screen h-screen relative'>
//         <div className='flex items-center justify-center w-full h-full bg-cover bg-center' style={{backgroundImage: "url(/new-main-bg.png)"}}>
//           <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col items-center gap-5 z-[10] max-w-[750px]'>
//               <h1 className="text-[50px] text-white font semi-bold text-center">
//                 Hi, I&apos;m Zara.
//               </h1>
//               <p className="text-gray-200 hidden md:block text-center">
//                 Lorem ipsum dolor- this always looked funny to me lol 
//               </p>
//               <div className="flex-col md:flex-row hidden md:flex gap-5 justify-center items-center">
//                 <Link href="/my-skills" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
//                 Learn more
//                 </Link>
//                 <Link href="/contact-me" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
//                 Contact me
//                 </Link>
//               </div>
//           </div>
//         </div>
//         {/* Thin band at the bottom for a visual break
//         <div style={{position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50px', backgroundColor: '#AD6455', zIndex: 30}} /> */}
//         <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
//           <Link href="/my-skills" className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
//             Learn more
//           </Link>
//           <Link href="/contact-me" className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
//             Contact me
//           </Link>
//         </div>
//       </main>
//       {/* What I Do Section */}
//       <section className="w-full bg-white py-16 flex flex-col items-center">
//         <h2 className="text-3xl font-bold text-gray-900 mb-10">What I Do</h2>
//             <div className="w-full max-w-5xl flex flex-row gap-5 justify-between items-stretch px-4">
//           <div className="flex-1 min-w-[220px] max-w-[350px] bg-white border-2 border-blue-400 rounded-2xl shadow-md p-8 flex flex-col items-center">
//             <span className="text-xl font-semibold mb-2">Frontend Development</span>
//             <p className="text-gray-700 text-center">Building responsive, modern web interfaces using React, Next.js, and Tailwind CSS.</p>
//           </div>
//           <div className="flex-1 min-w-[220px] max-w-[350px] bg-white border-2 border-blue-400 rounded-2xl shadow-md p-8 flex flex-col items-center">
//             <span className="text-xl font-semibold mb-2">Backend Development</span>
//             <p className="text-gray-700 text-center">Creating robust APIs and server-side logic with Node.js, Express, and databases.</p>
//           </div>
//           <div className="flex-1 min-w-[220px] max-w-[350px] bg-white border-2 border-blue-400 rounded-2xl shadow-md p-8 flex flex-col items-center">
//             <span className="text-xl font-semibold mb-2">UI/UX Design</span>
//             <p className="text-gray-700 text-center">Designing user-friendly, visually appealing digital experiences and prototypes.</p>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }