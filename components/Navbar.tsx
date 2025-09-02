import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-black shadow-md fixed top-0 left-0 z-50 flex justify-center items-center h-16">
      <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '50px', backgroundColor: '#000000', zIndex: 30}} />
      <ul className="flex flex-row gap-10 text-lg font-semibold text-white">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
