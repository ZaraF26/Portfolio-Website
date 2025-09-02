import Link from 'next/link'

export default function Home(){
  return(
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover bg-center' style={{backgroundImage: "url(/new-main-bg.png)"}}>
        <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
            <h1 className="text-[50px] text-white font semi-bold">
              Hi, I&apos;m Zara
            </h1>
            <p className="text-gray-200 hidden md:block">
              Lorem ipsum dolor- this always looked funny to me lol 
            </p>
            <div className="flex-col md:flex-row hidden md:flex gap-5">
              <Link href="/my-skills" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              Learn more
              </Link>
              <Link href="/contact-me" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              Contact me
              </Link>
            </div>
        </div>
      </div>
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link href="/my-skills" className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
          Learn more
        </Link>
        <Link href="/contact-me" className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
          Contact me
        </Link>
      </div>
    </main>
  )
}