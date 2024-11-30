import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between h-16 items-center px-40 border-b border-zinc-300 fixed">
      <div className="flex gap-3 items-center">
        <h1 className="text-3xl font-reenie">abdipitu</h1>
      </div>
      <ul className="flex gap-5 items-center font-poppins">
        <li>
          <Link href="/">Beranda</Link>
        </li>
      </ul>
    </nav>
  );
}
