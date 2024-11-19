"use client"

import * as React from "react";
import { useRouter } from "next/navigation";

import { ThemeToggle } from "@/components/theme/ThemeToggle";

import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col">
      <header className="py-8 px-12 h-20 flex items-center justify-between border-b">
        <div>
          <h1 className="text-2xl font-semibold">LaraNext</h1>
        </div>
        <div className="space-x-4 flex items-center">
          <ThemeToggle />
          <Button onClick={() => router.push("/login")}>Login</Button>
        </div>
      </header>
    </div>
  );
}
