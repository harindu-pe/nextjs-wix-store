"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

type Props = { navItems: { label: string; href: string }[] };

const NavbarMobile = ({ navItems }: Props) => {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="rounded-lg border px-2">
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full" side="bottom">
          <nav className="flex flex-col items-center gap-6 py-16">
            {navItems.map(({ label, href }) => (
              <div key={label} className="w-full rounded-lg px-24">
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    asChild
                    size="lg"
                    className="w-full  text-2xl hover:bg-background"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                </SheetClose>
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarMobile;
