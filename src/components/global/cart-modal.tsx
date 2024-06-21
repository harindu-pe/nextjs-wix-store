import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const CartModal = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="mr-auto text-lg font-semibold">Shopping Cart</h1>
      <Separator />

      <div className="flex flex-col gap-2">
        <Card className="w-fit">
          <div className="flex flex-row items-center justify-center">
            <div className="overflow-hidden rounded-lg">
              <Image src="/laptop.jpeg" width={150} height={150} alt="hel" />
            </div>
            <div className="">
              <CardContent className="flex flex-col gap-1 py-0">
                <div className="flex flex-row items-center gap-8 font-semibold">
                  <span>MacBook Air 13.6" Laptop</span>
                  <span>$ 1,999.00</span>
                </div>
                <div>
                  <Badge className="rounded-lg">In Stock</Badge>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <span className="text-sm">Quantity: 2</span>
                  <Button variant="outline">Remove</Button>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
        <Card className="w-fit">
          <div className="flex flex-row items-center justify-center">
            <div className="overflow-hidden rounded-lg">
              <Image src="/laptop.jpeg" width={150} height={150} alt="hel" />
            </div>
            <div className="">
              <CardContent className="flex flex-col gap-1 py-0">
                <div className="flex flex-row items-center gap-8 font-semibold">
                  <span>MacBook Air 13.6" Laptop</span>
                  <span>$ 1,999.00</span>
                </div>
                <div>
                  <Badge className="rounded-lg">In Stock</Badge>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <span className="text-sm">Quantity: 2</span>
                  <Button variant="outline">Remove</Button>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex w-full flex-row items-center justify-between px-2 font-bold">
        <span>Total</span>
        <span>$ 1,999.00</span>
      </div>

      <Separator />
      <div className="flex w-full flex-row items-center justify-center gap-8 font-semibold">
        <Button variant="outline" className="w-full">
          View Cart
        </Button>
        <Button variant="default" className="w-full">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartModal;
