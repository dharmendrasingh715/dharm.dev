import Link from "next/link";
import type { FC } from "react";

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/">
            <a className="mr-6 flex items-center space-x-2">Dharmendra Singh</a>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Link href="/blog">Blog</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
