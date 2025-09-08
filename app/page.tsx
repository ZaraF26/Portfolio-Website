import Link from 'next/link'

export default function Home(){
  return(
    <main className='w-screen h-screen relative'>
      <div className="absolute top-0 left-0 w-full z-[30]">
        <nav className="relative flex items-center justify-center gap-6 md:gap-10 px-6 md:px-10 py-6 text-gray-900">
          <Link href="/about" className="hover:text-gray-600 text-sm md:text-base">About</Link>
          <Link href="/projects" className="hover:text-gray-600 text-sm md:text-base">Projects</Link>
          <Link href="/contact" className="hover:text-gray-600 text-sm md:text-base">Contact</Link>
        </nav>
      </div>
      <div className='flex items-center justify-center w-full h-full bg-cover bg-center' style={{backgroundImage: "url(/new-main-bg.png)"}}>
        <div className='pb-56 md:pb-20 px-6 md:px-10 flex flex-col items-center gap-5 z-[10] max-w-[750px] text-center'>
            <h1 className="text-[50px] text-gray-900 font semi-bold">
              Hi, I&apos;m Zara
              <span className="text-transport bg-clip-text bg-gradient-r from-purple-500 to-cyan-500">
                 
              </span>
            </h1>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="rounded-[20px] bg-blue-600 hover:bg-blue-500 px-5 py-3 text-lg text-white">View CV</a>
            <p className="text-gray-600 hidden md:block">
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


     <div className="absolute bottom-10 z-[20] right-5 flex-col md:hidden ">
              <Link href="/my-skills" className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              Learn more
              </Link>
               <Link href="/my-skills" className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
             
              </Link>
              <Link href="/my-skills" className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              
              Contact me
              </Link>
            </div> 
    </main>
  )
}




















// import { Header } from "@/sections/Header";

// export default function HomePage() {
//   return <Header />;
// };