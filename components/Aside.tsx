import Link from "next/link";
import type { FC } from "react";

const Aside: FC = () => {
  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <div className="relative overflow-hidden h-full py-6 pl-8 pr-6 lg:py-8">
        <div className="h-full w-full rounded-[inherit]">
          <Link href="/">
            <a className="mr-6 flex items-center space-x-2">Dharmendra Singh</a>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
