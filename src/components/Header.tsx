import { LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { ShoppingCart, CircleUser } from "lucide-react"
import { usePathname } from "next/navigation"
import HeaderImage from "./HeaderImage"

const Header = () => {
  const pathname = usePathname()
  return (
    <header className=" relative flex flex-col justify-between items-center  ">
      {pathname === "/" && <HeaderImage />}
      <div className="relative z-10 flex w-full justify-between items-center gap-4 px-8 py-2">
        <Link href="/">
          <Image src="/logo-ig.svg" alt="Logo" width={150} height={38} />
        </Link>
        <ul className="flex gap-4 bg-linksBackground rounded-full p-2">
          {LINKS.map(({ name, img, alt, href, bgColor }) => (
            <li className="list-none" key={name}>
              <Link
                href={href}
                className={`flex gap-2 items-center text-white hover:bg-linkHover px-4 py-3 rounded-full transition-colors
                ${pathname === href ? bgColor : "bg-transparent"}
              `}
              >
                <Image src={img} alt={alt} width={20} height={20} />
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-6">
          <a className="hover:text-colorPrice text-white" href="#">
            <ShoppingCart size={28} />
          </a>
          <a className="hover:text-colorPrice text-white" href="#">
            <CircleUser size={28} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
