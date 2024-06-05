"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="pt-10">
      <div className="flex justify-between">
        <div className="text-2xl font-bold">
          <Link href="/">
            Tri Dung <span className="text-orange-500">.</span>
          </Link>
        </div>
        <div className="flex">
          <Navbar></Navbar>
          <Button className="hover:-translate-y-1 transition-all bg-transparent hover:bg-transparent">
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 bg-orange-500 text-black rounded-2xl hover:bg-orange-600"
            >
              Hire me
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
