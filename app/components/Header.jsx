"use client";

import Link from "next/link";
import useSticky from "../hooks/useSticky";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";

const Header = () => {
  const { sticky } = useSticky(100);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`bg-transparent border-b border-solid border-[#373434] border-opacity-60 absolute left-0 top-0 z-50 w-full backdrop-blur-md ${
        sticky ? "is-sticky" : ""
      }`}
    >
      <div className="container flex justify-between items-center relative py-3 lg:py-0">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="w-48 h-auto" />
        </Link>

        <button
          className="block lg:hidden text-4xl text-gray"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <MdOutlineClose /> : <HiOutlineMenuAlt3 />}
        </button>

        <nav
          className={`flex flex-col lg:flex-row items-center lg:gap-10 gap-5 lg:relative absolute top-full left-0 lg:w-fit w-full rounded-md px-[20px] lg:p-0 ${
            menuOpen
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 translate-x-full invisible lg:opacity-100 lg:visible lg:translate-x-0"
          } transition-all duration-500`}
        >
          <ul className="flex flex-col lg:flex-row items-center lg:gap-10 gap-5 text-gray bg-tertiary lg:bg-transparent w-full lg:w-fit py-10 lg:py-0">
            <li>
              <Link href="#demos" className="">
                Demos
              </Link>
            </li>
            <li>
              <Link href="#feature">Features</Link>
            </li>

            <li>
              <Link
                href="https://techwizard-documentation.vercel.app/"
                target="_blank"
              >
                Documentation
              </Link>
            </li>
            <li>
              <a href="mailto:khanmonir1335@gmail.com?subject=techwizard Template Support!">
                Support
              </a>
            </li>
            <li>
              <Link
                href="#"
                className="py-4 px-6 rounded-md bg-[#212e48] font-semibold text-gray hover:bg-primary transition-all duration-500 hover:-translate-y-2 block lg:hidden"
              >
                PURCHASE NOW
              </Link>
            </li>
          </ul>

          <Link
            href="#"
            className="py-4 px-6 rounded-md bg-[#212e48] font-semibold text-gray hover:bg-primary transition-all duration-500 hover:-translate-y-2 hidden lg:block"
          >
            PURCHASE NOW
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
