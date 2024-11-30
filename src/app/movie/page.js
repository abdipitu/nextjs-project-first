import Link from "next/link";

export default function MoviePage() {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center flex-col gap-2">
        <p className="font-semibold text-4xl">
          Masih dalam tahap pengembangan.
        </p>
        <p className="text-zinc-500">
          website ini akan tersedia ketika developer sudah tidak malas 🗿
        </p>
        <Link
          href="https://github.com/abdipitu"
          className="flex gap-3 px-3 py-1.5 mt-4 font-poppins rounded-md bg-black text-white text-center items-center"
        >
          <i className="ri-github-fill"></i>
          <p className="text-sm font-medium">Abdipitu</p>
        </Link>
      </div>
    </div>
  );
};
