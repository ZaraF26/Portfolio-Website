import Link from 'next/link'
import ProjectCard from '../components/ProjectCardProps'

const projects = [
  {
    title: 'Project One',
    description: 'A cool project that does amazing things.',
    link: 'https://github.com/zara/project-one',
  },
  {
    title: 'Project Two',
    description: 'Another awesome project with great features.',
    link: 'https://github.com/zara/project-two',
  },
  {
    title: 'Project Three',
    description: 'A third project showcasing skills and creativity.',
    link: 'https://github.com/zara/project-three',
  },
]

export default function Home() {
  return ( 

     <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover bg-center' style={{backgroundImage: "url(/new-main-bg.png"}}>
        <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
            <h1 className="text-[50px] text-white font semi-bold">
              Hi, I&apos;m Zara
              <span className="text-transport bg-clip-text bg-gradient-r from-purple-500 to-cyan-500">
                Web Development    
              </span>
            </h1>
            <p className="text-gray-200 hidden md:block">
              Lorem ipsum dolor- this always looked funny to me lol 
            </p>
            <div className="flex-col md:flex-row hidden md:flex">
              <Link href="/my-skills" className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              Learn more
              </Link>
               <Link href="/my-skills" className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20' />
              My projects
              </Link>
              <Link href="/my-skills" className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20' />
              Contact me
              </Link>
            </div>
        </div>
      </div>


    <div className="space-y-16">
      {/* Intro Section */}
      <section 
  className="relative text-center flex flex-col items-center justify-center h-96 bg-cover bg-center"
  style={{ backgroundImage: "url('/new-main-bg.png')" }}
>
  {/* Optional overlay to make text stand out */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 max-w-xl mx-auto">
    <h1 className="text-4xl font-bold mb-4 text-white">Hi, I'm Zara</h1>
    <p className="text-lg text-gray-100">
      Welcome to my portfolio website. I build web applications and love creating beautiful user experiences.
    </p>
  </div>
</section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>

      {/* Contact Call to Action */}
      <section className="bg-indigo-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Let's get in touch</h2>
        <p className="mb-6">Interested in working together? Feel free to reach out!</p>
        <Link
          href="/contact"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Contact Me
        </Link>
      </section>
    </div>
       </main>
  )
}