import Link from "next/link"

const Page = () => {
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

        <div className="w-full h-screen flex justify-center items-center flex-col gap-2">
            <p className="font-semibold text-4xl">Masih dalam tahap pengembangan.</p>
            <p className="text-zinc-500">website ini akan tersedia ketika developer sudah tidak malas 🗿</p>
            <Link href="https://github.com/abdipitu" className="flex gap-3 px-3 py-1.5 mt-4 font-outfit rounded-md bg-black text-white">
                <i className="ri-github-fill"></i>
                <p>abdipitu</p>
            </Link>
        </div>
    </div>
  )
}

export default Page
