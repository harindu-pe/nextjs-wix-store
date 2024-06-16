"use client";

import HeaderCart from "@/components/global/header-cart";
import HeaderSearch from "@/components/global/header-search";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = { navItems: { label: string; href: string }[] };

const Navbar = ({ navItems }: Props) => {
  return (
    <nav className="hidden sm:flex items-center w-full pl-8">
      <div className="w-1/2 flex items-center gap-2">
        {navItems.map(({ label, href }) => (
          <div key={label} className="flex items-center">
            <Button asChild variant="ghost" className="rounded-lg">
              <Link href={href}>{label}</Link>
            </Button>
          </div>
        ))}
      </div>
      <div className="w-1/2 flex items-center justify-between gap-8">
        <HeaderSearch />
        <HeaderCart />
      </div>
    </nav>
  );
};

export default Navbar;
