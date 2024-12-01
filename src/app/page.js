import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="px-5 md:px-40">
        <div className="w-full h-96 flex flex-col justify-center items-center">
          <h1 className="font-medium  text-center md:text-start text-3xl md:text-5xl font-reenie">
            website untuk senang-senang belaka
          </h1>
          <p className="font-lg text-sm md:text-base text-center hover:border-zinc-600 text-zinc-500">
            Dibuat dengan tujuan untuk belajar mengenai NextJS.
          </p>
          <div className="mt-5 space-x-3 font-medium">
            <Link href="/movie">
              <button className="py-2 px-5 bg-black text-white rounded-md text-sm">
                Get Started <i className="ri-arrow-right-line"></i>
              </button>
            </Link>
            <Link href="https://github.com/abdipitu">
              <button className="py-2 px-5 border border-zinc-300 rounded-md text-sm">
                <i className="ri-github-line"></i> Github
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-3 justify-between items-center px-5 md:px-36 mb-40">
        <div className="h-44 w-80 md:w-96 border border-zinc-300 rounded-lg hover:border-zinc-600 p-5 flex flex-col justify-between">
          <h1 className="font-reenie text-2xl">Anime Website</h1>
          <p className="text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <Link href="/movie">
            <button className="py-1.5 px-5 w-full border border-zinc-300 rounded-md text-sm">
              Show Website <i className="ri-arrow-right-up-line"></i>
            </button>
          </Link>
        </div>
        <div className="h-44 w-80 md:w-96 border border-zinc-300 rounded-lg hover:border-zinc-600 p-5 flex flex-col justify-between">
          <h1 className="font-reenie text-2xl">Gus Hakam Khariri</h1>
          <p className="text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <Link href="https://gus-hakamkhariri.my.id">
            <button className="py-1.5 px-5 w-full bg-black text-white border border-zinc-300 rounded-md text-sm">
              Show Website <i className="ri-arrow-right-up-line"></i>
            </button>
          </Link>
        </div>
        <div className="h-44 w-80 md:w-96 border border-zinc-300 rounded-lg hover:border-zinc-600 p-5">
        <h1 className="font-reenie text-2xl">404 | Not Found</h1>
        </div>
      </section>
    </div>
  );
}
