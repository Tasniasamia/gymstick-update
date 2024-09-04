"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="h-[120px] flex flex-col justify-center bg-black">
      <div className="container flex items-center justify-between">
        <Image
          src="/images/layout/logo.png"
          width={218}
          height={47}
          alt="logo"
          className="lg:h-[47px] lg:w-[218px] w-[150px] h-[40px]"
        />
        <div className="flex items-center gap-[80px]">
        <div className="lg:flex hidden items-center gap-[40px] text-white">
          <Link
            className={`nav-link ${
              pathname === "/" ? "text-primary " : "text-white"
            } hover:text-primary duration-150 transition-all`}
            href="/"
          >
            <span>Home</span>
          </Link>
          <Link
            className={`nav-link ${
              pathname === "/about" ? "text-primary " : "text-white"
            } hover:text-primary duration-150 transition-all`}
            href="/about"
          >
            <span>About</span>
          </Link>
          <Link
            className={`nav-link ${
              pathname === "/service" ? "text-primary " : "text-white"
            } hover:text-primary duration-150 transition-all`}
            href="/service"
          >
            <span>Service</span>
          </Link>
          <Link
            className={`nav-link ${
              pathname === "/shop" ? "text-primary " : "text-white"
            } hover:text-primary duration-150 transition-all`}
            href="/shop"
          >
            <span>Shop</span>
          </Link>
          <Link
            className={`nav-link ${
              pathname === "/blog" ? "text-primary " : "text-white"
            } hover:text-primary duration-150 transition-all`}
            href="/blog"
          >
            <span>Blog</span>
          </Link>
          <Link
            className={`nav-link ${
              pathname === "/more" ? "text-primary " : "text-white"
            } hover:text-primary duration-150 transition-all`}
            href="/more"
          >
            <span>More</span>
          </Link>
        </div>
        <button className="cursor-pointer bg-primary text-white px-[32px] py-[16px] hover:scale-105 duration-300 rounded-[4px] transition-all">
          Join Us
        </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
