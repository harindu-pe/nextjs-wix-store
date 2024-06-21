"use client";

import HeaderCart from "@/components/global/header-cart";
import HeaderSearch from "@/components/global/header-search";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = { navItems: { label: string; href: string }[] };

const Navbar = ({ navItems }: Props) => {
  return (
    <nav className="hidden w-full items-center pl-8 sm:flex">
      <div className="flex w-1/2 items-center gap-2">
        {navItems.map(({ label, href }) => (
          <div key={label} className="flex items-center">
            <Button asChild variant="ghost">
              <Link href={href}>{label}</Link>
            </Button>
          </div>
        ))}
      </div>
      <div className="flex w-1/2 items-center justify-between gap-2 px-2">
        <HeaderSearch />
        <HeaderCart />
      </div>
    </nav>
  );
};

export default Navbar;
