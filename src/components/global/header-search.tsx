"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const HeaderSearch = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className="flex w-full items-center gap-1 rounded-lg border"
      onSubmit={handleSearch}
    >
      <Input name="name" className="border-none" placeholder="Search" />
      <Button variant="ghost" className="">
        <Search />
      </Button>
    </form>
  );
};

export default HeaderSearch;
