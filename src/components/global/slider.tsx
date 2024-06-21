"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  return (
    <div className="grid w-full place-items-center overflow-hidden">
      <Carousel
        className="relative w-full border-none"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div>
                <Card>
                  <CardContent className="flex h-[90vh] w-full flex-col items-center justify-center p-0 lg:flex-row">
                    <div
                      className={cn(
                        "flex h-full w-full flex-1 flex-col items-center justify-center gap-8",
                        slides[index].bg,
                      )}
                    >
                      <div className="text-xl">{slides[index].description}</div>
                      <h1 className="text-center text-5xl font-semibold">
                        {slides[index].title}
                      </h1>
                      <Button size="lg">SHOP NOW</Button>
                    </div>
                    <div className="relative h-full w-full flex-1">
                      <Image
                        src={slides[index].img}
                        fill
                        alt=""
                        className="object-cover object-top"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute left-20 top-1/2">
          <CarouselPrevious />
        </div>
        <div className="absolute right-20 top-1/2">
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
