import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const HeaderLogo = () => {
  return (
    <div>
      <div className="w-fit">
        <div className="flex items-center gap-2">
          <ShoppingCart className="size-6" />
          <Link
            href="/"
            className="text-nowrap text-lg font-semibold tracking-wide"
          >
            Art Store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogo;
