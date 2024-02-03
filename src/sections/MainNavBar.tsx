"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import Image from "next/image";

type Props = {};

const MainNavBar = (props: Props) => {
  const router = useRouter();

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const closeDropdown = () => {
    setOpenNav(false);
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-normal">
        <Link
          href="/about"
          onClick={closeDropdown}
          className="flex items-center"
        >
          About Us
        </Link>
      </li>
      <li className="p-1 font-normal">
        <Link
          href="/contact"
          onClick={closeDropdown}
          className="flex items-center"
        >
          Contact Us
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="sticky top-0 z-10 h-max max-w-full rounded-none bg-background py-2 lg:py-4">
      <div className="text-blue-gray-900 padding-x-axis flex items-center justify-between">
        <Link href="/" className="mr-4 cursor-pointer py-1.5 font-medium">
          <Image
            src="/logo.webp"
            alt="logo"
            width={200}
            height={50}
            className="hidden lg:inline"
          />
          <Image
            src="/logo.webp"
            alt="logo"
            width={150}
            height={50}
            className="lg:hidden"
          />
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            {/* <Button variant="text" size="sm" className="hidden lg:inline-block">
              <span>Log In</span>
            </Button> */}

            <Button className="hidden lg:inline-block" variant="default">
              <span>Contact Me</span>
            </Button>
          </div>
          <Button className="lg:hidden">
            <span>Contact Me</span>
          </Button>
          {openNav ? (
            <X
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            />
          ) : (
            <Menu
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            />
          )}
        </div>
      </div>
      {openNav && (
        <div className="absolute w-full bg-background px-2">
          <div className="relative flex items-center gap-x-1">{navList}</div>
        </div>
      )}
    </nav>
  );
};

export default MainNavBar;
