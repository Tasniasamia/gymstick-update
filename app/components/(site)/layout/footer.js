"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="bg-white pt-[114px] pb-[125px] border-t border-[#D9D9D9]">
      <div className="container grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  lg:gap-0 gap-y-[30px]">
        <div className="">
          <div className="lg:w-[232px] w-full flex flex-col gap-[24px]">
            <Image
              src="/images/layout/logo.png"
              width={218}
              height={47}
              alt="logo"
              className="lg:h-[47px] lg:w-[218px] w-[150px] h-[40px]"
            />
            <div className="flex gap-[24px]">
              <FaLinkedinIn className="text-[#2B2B2B] text-[19.23px] ms-[10.77px] hover:text-primary duration-200 transition-all" />
              <FaFacebookF className="text-[#2B2B2B] text-[19.23px] hover:text-primary duration-200 transition-all" />
              <FaTwitter className="text-[#2B2B2B] text-[19.23px] hover:text-primary duration-200 transition-all" />
            </div>
            <p className="footer-text text-[#2B2B2B]">
              &copy; gymstick 2024. All rights reserved
            </p>
          </div>
        </div>
        <div className=" flex flex-col lg:items-end md:items-center">
          <ul className="list-none flex flex-col gap-[14px]">
            <li className="footer-title mb-[9px] ">Company</li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/about" ? "text-primary" : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/about">About Us</Link>
            </li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/career" ? "text-primary" : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/career">Careers</Link>
            </li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/story" ? "text-primary" : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/story">Our Story</Link>
            </li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/contact" ? "text-primary" : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col md:items-end">
          <ul className="list-none flex flex-col gap-[14px]">
            <li className="footer-title mb-[9px] ">Products</li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/automations" ? "text-primary" : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/automations">Automations</Link>
            </li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/integrations" ? "text-primary" : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/integrations">Integrations</Link>
            </li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/small-business"
                  ? "text-primary"
                  : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/small-business">Small Scale Business</Link>
            </li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/large-business"
                  ? "text-primary"
                  : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/large-business">Large Scale Business</Link>
            </li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/intranets" ? "text-primary" : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/intranets">Intranets</Link>
            </li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/crm" ? "text-primary" : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/crm">CRM (internal tools)</Link>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col lg:items-end">
          <ul className="list-none flex flex-col gap-[14px]">
            <li className="footer-title mb-[9px] ">Resources</li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/blog" ? "text-primary" : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/blog">Blog</Link>
            </li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/help" ? "text-primary" : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/help">Help Center</Link>
            </li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/terms" ? "text-primary" : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/terms">Glossary Of Terms</Link>
            </li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/community" ? "text-primary" : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/community">Community</Link>
            </li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/news" ? "text-primary" : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/news">News</Link>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col lg:items-end">
          <ul className="list-none flex flex-col gap-[14px]">
            <li className="footer-title mb-[9px] ">Terms</li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/privacy-policy"
                  ? "text-primary"
                  : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/cookie" ? "text-primary" : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/cookie">Cookie Policy</Link>
            </li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/term-of-service"
                  ? "text-primary"
                  : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/term-of-service">Terms Of Service</Link>
            </li>
            <li
              className={`footer-text mb-[9px] ${
                pathname === "/license-agreement"
                  ? "text-primary"
                  : "text-[#534C4C]"
              } text-[#534C4C] hover:text-primary duration-200 transition-all`}
            >
              <Link href="/license-agreement">End User License Agreement</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
