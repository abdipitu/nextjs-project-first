import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="w-full flex justify-between h-20 items-center px-40 bg-zinc-700 text-white fixed">
        <div className="flex gap-3 items-center">
          <i className="ri-spectrum-fill"></i>
          <h1 className="text-xl font-bold font-parkinsans">Anime</h1>
        </div>
        <ul className="flex gap-3 items-center font-outfit">
          <li><Link href="/">Beranda</Link></li>
          <li>About</li>
          <li><Link href="/movie">Movie</Link></li>
        </ul>
      </nav>

      <section className="px-40">
        <div className="w-full h-screen flex flex-col justify-center items-center">
         <h1 className="font-medium text-4xl font-parkinsans">Watch<span className="font-bold font-parkinsans"> Anime</span></h1> 
         <p className="font-lg text-zinc-500">Tempat menonton anime secara gratis, legal tentunya.</p>
        </div>
      </section>
    </div>
  );
}
