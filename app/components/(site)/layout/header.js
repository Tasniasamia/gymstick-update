"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { Dropdown } from "antd";
import { IoChevronDownOutline } from "react-icons/io5";

  const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="h-[120px] flex flex-col justify-center bg-[#001223] bg-opacity-[92%] ">
      <div className="container flex items-center justify-between">
        <Image
          src="/images/layout/logo.png"
          width={218}
          height={47}
          alt="logo"
          className="lg:h-[47px] lg:w-[218px] w-[150px] h-[40px]"
        />
        <div className="lg:flex  hidden items-center gap-[80px]">
          <div className="flex  items-center gap-[40px] text-white">
            <Dropdown
              trigger="hover"
              overlay={
                <div className="rounded-sm bg-white relative top-3  shadow-sm w-fit">
                  <>
                    <div
                      className={`py-2 flex items-center gap-2 group ${
                        pathname == "/"
                          ? "bg-primary text-white"
                          : "text-black bg-white"
                      } hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200`}
                    >
                      {/* {item?.icon} */}
                      <Link
                        className="group-hover:text-white transition-all duration-200"
                        href={"/"}
                      >
                        Home 1
                      </Link>
                    </div>
                    <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                      {/* {item?.icon} */}
                      <Link
                        className="group-hover:text-white transition-all duration-200"
                        href={"/home-2"}
                      >
                        Home 2
                      </Link>
                    </div>
                    <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                      {/* {item?.icon} */}
                      <Link
                        className="group-hover:text-white transition-all duration-200"
                        href={"/home-3"}
                      >
                        Home 3
                      </Link>
                    </div>
                  </>
                </div>
              }
            >
              <div className="flex h-full items-center gap-x-1 cursor-pointer group">
                <p className="nav-link text-white group-hover:text-primary duration-200 transition-all">
                  Home
                </p>
                <IoChevronDownOutline className="text-white text-base group-hover:text-primary group-hover:rotate-180 duration-200 transition-all" />
              </div>
            </Dropdown>
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
            <Dropdown
              trigger="hover"
              overlay={
                <div className="rounded-sm bg-white relative top-3  shadow-sm w-fit">
                  <>
                    <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                      {/* {item?.icon} */}
                      <Link
                        className="group-hover:text-white transition-all duration-200"
                        href={"/assistant"}
                      >
                        Login
                      </Link>
                    </div>
                  </>
                </div>
              }
            >
              <div className="flex h-full items-center gap-x-1 cursor-pointer group">
                <p className="nav-link text-white group-hover:text-primary duration-200 transition-all">
                  More
                </p>
                <IoChevronDownOutline className="text-white text-base group-hover:text-primary group-hover:rotate-180 duration-200 transition-all" />
              </div>
            </Dropdown>
          </div>
          <button className="cursor-pointer bg-primary text-white px-[32px] py-[16px] hover:scale-105 duration-300 rounded-[4px] transition-all">
            Join Us
          </button>
        </div>
        <div className="lg:hidden block">
          {!open ? (
            <FaBars
              onClick={() => setOpen(!open)}
              className="lg:hidden text-2xl text-white"
            />
          ) : (
            <IoMdClose
              onClick={() => setOpen(!open)}
              className="lg:hidden text-2xl text-white"
            />
          )}
        </div>
      </div>

      {/* For mobile screen */}
      <div
        className={`absolute bg-[#001223] bg-opacity-[92%] z-50 top-[120px] left-0 w-[100%] lg:hidden  pt-5 pb-10 flex flex-col px-5 gap-5 ${
          open ? "flex" : "hidden"
        } transition-all duration-300`}
        style={{ filter: "drop-shadow(0px  20px 10px rgba(0, 0, 0, 0.20))" }}
      >
        <Dropdown
          trigger="hover"
          overlay={
            <div className="rounded-sm bg-white relative top-3  shadow-sm w-fit">
              <>
                <div
                  className={`py-2 flex items-center gap-2 group ${
                    pathname == "/"
                      ? "bg-primary text-white"
                      : "text-black bg-white"
                  } hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200`}
                >
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/"}
                  >
                    Home 1
                  </Link>
                </div>
                <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/home-2"}
                  >
                    Home 2
                  </Link>
                </div>
                <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/home-3"}
                  >
                    Home 3
                  </Link>
                </div>
              </>
            </div>
          }
        >
          <div className="flex h-full items-center gap-x-1 cursor-pointer group">
            <p className="flex items-center  gap-[6px] font-medium text-base  text-white group-hover:text-primary duration-200 transition-all">
              Home
            </p>
            <IoChevronDownOutline className="text-white text-base group-hover:text-primary group-hover:rotate-180 duration-200 transition-all" />
          </div>
        </Dropdown>
        <Link
          href="/about"
          className={`flex  items-center gap-[6px] font-medium text-base  ${
            pathname === "/about" ? "text-primary" : "text-white"
          } hover:text-primary duration-200 transition-all `}
          onClick={() => setOpen(!open)}
        >
          <span>About</span>
        </Link>
        <Link
          href="/service"
          className={`flex  items-center gap-[6px] font-medium text-base  ${
            pathname === "/service" ? "text-primary" : "text-white"
          } hover:text-primary duration-200 transition-all `}
          onClick={() => setOpen(!open)}
        >
          <span>Service</span>
        </Link>
        <Link
          href="/shop"
          className={`flex  items-center gap-[6px] font-medium text-base   ${
            pathname === "/shop" ? "text-primary" : "text-white"
          } hover:text-primary duration-200 transition-all `}
          onClick={() => setOpen(!open)}
        >
          <span>Shop</span>
        </Link>
        <Link
          href="/blog"
          className={`flex  items-center gap-[6px] font-medium text-base   ${
            pathname === "/blog" ? "text-primary" : "text-white"
          } hover:text-primary duration-200 transition-all `}
          onClick={() => setOpen(!open)}
        >
          <span>Blog</span>
        </Link>
        <Dropdown
          trigger="hover"
          overlay={
            <div className="rounded-sm bg-white relative top-3  shadow-sm w-fit">
              <>
                <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/assistant"}
                  >
                    Login
                  </Link>
                </div>
              </>
            </div>
          }
        >
          <div className="flex items-center gap-x-1 cursor-pointer group">
            <p className="font-medium text-base  text-white group-hover:text-primary duration-200 transition-all">
              More
            </p>
            <IoChevronDownOutline className="text-white text-base group-hover:text-primary group-hover:rotate-180 duration-200 transition-all" />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
