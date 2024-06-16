import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const HeaderLogo = () => {
  return (
    <div>
      <div className="w-fit">
        <div className="flex gap-2 items-center">
          <ShoppingCart className="size-6" />
          <Link
            href="/"
            className="text-lg tracking-wide font-semibold text-nowrap"
          >
            Wix Store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogo;
