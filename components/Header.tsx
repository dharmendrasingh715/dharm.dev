import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex flex-row justify-between font-mono text-slate-200">
      <div>
        <Link href="/">home</Link>
      </div>
      <ul className="flex">
        <li className="px-7 pt-2.5 bg-teal-400 bg-opacity-50 z-0 rounded-tl-xl rounded-tr-lg h-10 hover:bg-teal-500 hover:z-40">
          <Link href="/">Home</Link>
        </li>
        <li className="px-7 pt-2.5 bg-red-400 bg-opacity-50 z-10 rounded-tl-xl rounded-tr-lg h-10 -ml-2 hover:bg-red-500 hover:z-40">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="px-7 pt-2.5 bg-amber-400 bg-opacity-50 z-20 rounded-tl-xl rounded-tr-lg h-10 -ml-2 hover:bg-amber-500 hover:z-40">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="px-7 pt-2.5 bg-lime-400 bg-opacity-50 z-30 rounded-tl-xl rounded-tr-lg h-10 -ml-2 hover:bg-lime-500 hover:z-40">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
