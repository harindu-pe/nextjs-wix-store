import CartModal from "@/components/global/cart-modal";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell, ShoppingCart, User } from "lucide-react";

const HeaderCart = () => {
  return (
    <div className="h-[100%]] flex items-center rounded-lg border">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="sm" className="rounded-lg py-5">
            <User />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-fit">
          <div className="p-2">
            <div>Profile</div>
            <div>Logout</div>
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="relative rounded-lg py-5"
          >
            <ShoppingCart />
            <div className="absolute -top-1 right-0 flex items-center justify-center rounded-full bg-rose-400 p-1 text-xs">
              23
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-fit">
          <CartModal />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default HeaderCart;
