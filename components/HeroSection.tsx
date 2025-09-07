"use client";

import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      {/* Example profile image - optional */}
      <div className="mb-6">
        <Image
          src="/public/new-main-bg.png" // put profile.png inside /public/assets/
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full shadow-lg"
        />
      </div>

      <h1 className="text-5xl font-bold mb-4">Hi, I’m Zara</h1>
      <p className="text-lg mb-8 text-gray-600 max-w-xl">
        Full-stack developer & designer passionate about building clean, modern web experiences.
      </p>

      {/* Social links */}
      <div className="flex space-x-6 mb-12">
        {/* External links use <a> */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>

        <a
          href="mailto:youremail@example.com"
          className="hover:text-red-500 transition-colors"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>

      {/* Scroll down button */}
      <div className="absolute bottom-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-500" />
      </div>
    </section>
  );
}











// import { motion } from 'framer-motion';
// import { Button } from '../components/ui/button';
// import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

// const HeroSection = () => {
//   const socialLinks = [
//     { icon: Github, href: '#', label: 'GitHub' },
//     { icon: Linkedin, href: '#', label: 'LinkedIn' },
//     { icon: Mail, href: '#', label: 'Email' },
//   ];

//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
//       <div className="container mx-auto px-6 text-center z-10">
//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="max-w-4xl mx-auto"
//         >
//           <motion.h1 
//             className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             Hi, I'm{' '}
//             <span className="text-gradient">
//               Alex Johnson
//             </span>
//           </motion.h1>
          
//           <motion.p 
//             className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             Full-stack developer crafting digital experiences with modern technologies and clean code
//           </motion.p>
          
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             <Button size="lg" className="text-lg px-8 py-6 shadow-glow">
//               View My Work
//             </Button>
//             <Button 
//               variant="outline" 
//               size="lg" 
//               className="text-lg px-8 py-6"
//               onClick={() => {
//                 // This would trigger CV download
//                 console.log('Download CV');
//               }}
//             >
//               Download CV
//             </Button>
//           </motion.div>

//           <motion.div 
//             className="flex justify-center space-x-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 1 }}
//           >
//             {socialLinks.map((link, index) => {
//               const Icon = link.icon;
//               return (
//                 <motion.a
//                   key={link.label}
//                   href={link.href}
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 1 + 0.1 * index, duration: 0.4 }}
//                   className="p-3 rounded-full bg-card hover:bg-accent transition-smooth shadow-md hover:shadow-lg"
//                 >
//                   <Icon className="w-6 h-6 text-muted-foreground hover:text-primary transition-smooth" />
//                 </motion.a>
//               );
//             })}
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div 
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 0.6 }}
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           className="flex flex-col items-center text-muted-foreground"
//         >
//           <span className="text-sm mb-2">Scroll down</span>
//           <ChevronDown className="w-5 h-5" />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;