"use client";

import Link from "next/link";
import { Chrome as Mushroom } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled 
        ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b" 
        : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Mushroom className="h-6 w-6 text-green-800 dark:text-green-500" />
          <span className="font-bold text-xl text-green-800 dark:text-green-500">Myきのこ図鑑</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-1">
          <Link href="/" passHref>
            <Button variant={pathname === "/" ? "default" : "ghost"} className="text-sm">
              ホーム
            </Button>
          </Link>
          <Link href="/my-collection" passHref>
            <Button variant={pathname === "/my-collection" ? "default" : "ghost"} className="text-sm">
              マイ図鑑
            </Button>
          </Link>
          <Link href="/guide" passHref>
            <Button variant={pathname === "/guide" ? "default" : "ghost"} className="text-sm">
              使い方
            </Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}