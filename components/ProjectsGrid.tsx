
"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectsGrid() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js & Tailwind.",
      image: "/assets/project-3.jpg", // put this inside /public/assets/
      demo: "https://your-portfolio.com", // external link
      repo: "https://github.com/yourusername/portfolio", // external link
    },
    {
      title: "Todo App",
      description: "A simple todo app using React & TypeScript.",
      image: "/assets/project-1.jpg",
      demo: "https://your-todo-demo.com",
      repo: "https://github.com/yourusername/todo-app",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Project image */}
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project content */}
              <div className="p-4 flex flex-col space-y-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>

                <div className="flex space-x-4 mt-4">
                  {/* External links → use <a> */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:underline text-sm"
                  >
                    GitHub
                  </a>

                  {/* Example of an internal link → use <Link> */}
                  {/* <Link href={`/projects/${index}`} className="text-sm text-green-600 hover:underline">
                    Details
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




// import { motion } from 'framer-motion';
// import { Card } from '../components/ui/card';
// import { Badge } from '../components/ui/badge';
// import { ExternalLink, Github } from 'lucide-react';
// import project1 from '../assets/project-1.jpg';
// import project2 from '../assets/project-2.jpg';
// import project3 from '../assets/project-3.jpg';
// import project4 from '../assets/project-4.jpg';

// const ProjectsGrid = () => {
//   const projects = [
//     {
//       id: 1,
//       title: 'Analytics Dashboard',
//       description: 'A comprehensive analytics platform with real-time data visualization and reporting capabilities.',
//       image: project1,
//       technologies: ['React', 'TypeScript', 'D3.js', 'Node.js'],
//       status: 'Live',
//     },
//     {
//       id: 2,
//       title: 'E-Commerce Mobile App',
//       description: 'Modern mobile commerce application with seamless user experience and secure payment integration.',
//       image: project2,
//       technologies: ['React Native', 'Redux', 'Firebase', 'Stripe'],
//       status: 'In Development',
//     },
//     {
//       id: 3,
//       title: 'Creative Portfolio',
//       description: 'A stunning portfolio website showcasing creative work with interactive animations and smooth transitions.',
//       image: project3,
//       technologies: ['Next.js', 'Framer Motion', 'Three.js', 'GSAP'],
//       status: 'Live',
//     },
//     {
//       id: 4,
//       title: 'SaaS Platform',
//       description: 'Enterprise-grade software as a service platform with advanced user management and analytics.',
//       image: project4,
//       technologies: ['Vue.js', 'Django', 'PostgreSQL', 'AWS'],
//       status: 'Live',
//     },
//   ];

//   const handleProjectClick = (projectId: number) => {
//     // This would navigate to the project detail page
//     console.log(`Navigate to project ${projectId}`);
//   };

//   return (
//     <section id="projects" className="py-20 bg-muted/30">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             A showcase of my recent work, ranging from web applications to mobile experiences
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -8 }}
//               className="group cursor-pointer"
//               onClick={() => handleProjectClick(project.id)}
//             >
//               <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-card/50 backdrop-blur-sm">
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
//                       <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
//                         {project.status}
//                       </Badge>
//                       <div className="flex space-x-2">
//                         <motion.div
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.95 }}
//                           className="p-2 rounded-full bg-background/80 backdrop-blur-sm"
//                         >
//                           <Github className="w-4 h-4" />
//                         </motion.div>
//                         <motion.div
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.95 }}
//                           className="p-2 rounded-full bg-background/80 backdrop-blur-sm"
//                         >
//                           <ExternalLink className="w-4 h-4" />
//                         </motion.div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-smooth">
//                     {project.title}
//                   </h3>
//                   <p className="text-muted-foreground mb-4 line-clamp-2">
//                     {project.description}
//                   </p>
                  
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, techIndex) => (
//                       <Badge 
//                         key={techIndex} 
//                         variant="outline" 
//                         className="text-xs hover:bg-primary hover:text-primary-foreground transition-smooth"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="text-center mt-12"
//         >
//           <motion.a
//             href="#"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center text-primary hover:text-primary-glow transition-smooth text-lg font-medium"
//           >
//             View All Projects
//             <ExternalLink className="w-5 h-5 ml-2" />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsGrid;