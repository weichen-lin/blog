"use client";

import {
  Boxes,
  Home,
  Info,
  MonitorSmartphone,
  Moon,
  Notebook,
  Sun,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/Dock";
import { cn } from "@/lib/utils";

function useThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggle = () => {
    if (!mounted) return;
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };

  const icon =
    theme === "system" ? (
      <MonitorSmartphone className="h-full w-full text-violet-500" />
    ) : theme === "light" ? (
      <Sun className="h-full w-full text-amber-500" />
    ) : (
      <Moon className="h-full w-full text-blue-400" />
    );

  const label =
    theme === "system" ? "System" : theme === "light" ? "Light" : "Dark";

  return { toggle, icon, label, mounted };
}

const Routes = [
  { name: "Home", icon: <Home />, path: "/" },
  { name: "About", icon: <Info />, path: "/about" },
  { name: "Projects", icon: <Boxes />, path: "/projects" },
  { name: "Blog", icon: <Notebook />, path: "/blog" },
];

export default function Footer() {
  const { toggle, icon, label, mounted } = useThemeSwitcher();

  return (
    <footer className="fixed bottom-4 left-1/2 max-w-full -translate-x-1/2">
      <Dock
        className={cn(
          "backdrop-blur-md bg-slate-200 dark:bg-zinc-800 px-4 py-3 rounded-xl shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.17)]",
          "border border-white/20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.15))] items-end",
        )}
      >
        {Routes.map((route) => (
          <Link key={route.name} href={route.path}>
            <DockItem className="aspect-square bg-zinc-100 rounded-xl border border-input dark:bg-zinc-800">
              <DockLabel>{route.name}</DockLabel>
              <DockIcon>{route.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}

        <DockItem
          className="aspect-square bg-zinc-100 rounded-xl border border-input dark:bg-zinc-800"
          onClick={toggle}
        >
          <DockLabel>{label}</DockLabel>
          <DockIcon>
            <div
              className={cn(
                "h-full w-full transition-opacity duration-150",
                mounted ? "opacity-100" : "opacity-0",
              )}
            >
              {icon}
            </div>
          </DockIcon>
        </DockItem>
      </Dock>
    </footer>
  );
}
