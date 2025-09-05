"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/logo.svg" // place logo.svg inside /public/assets/
          alt="Logo"
          width={40}
          height={40}
          priority
        />
      </Link>

      {/* Links */}
      <div className="space-x-6 font-medium">
        <Link href="/projects" className="hover:text-blue-600 transition-colors">
          Projects
        </Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-blue-600 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}


























// import { motion } from 'framer-motion';
// import { Button } from '../components/ui/button';

// const Navigation = () => {
//   const navItems = [
//     { name: 'Projects', href: '#projects' },
//     { name: 'About', href: '#about' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <motion.nav 
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
//     >
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="text-2xl font-bold text-gradient"
//           >
//             Portfolio
//           </motion.div>
          
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item, index) => (
//               <motion.a
//                 key={item.name}
//                 href={item.href}
//                 initial={{ y: -10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.1 * index, duration: 0.4 }}
//                 className="text-muted-foreground hover:text-foreground transition-smooth relative group"
//               >
//                 {item.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
//               </motion.a>
//             ))}
//           </div>

//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.3, duration: 0.4 }}
//           >
//             <Button variant="outline" className="hidden md:block">
//               Resume
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navigation;