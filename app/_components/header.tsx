"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "motion/react";
import { cn } from "@/@/_lib/utils";
import { ThemeToggler } from "@/@/_components/theme-toggle";

const navItems = {
  "/": {
    name: "home",
  },
  "/experience": {
    name: "experience",
  },
  "/skills": {
    name: "skills",
  },
  "/projects": {
    name: "projects",
  },
};

export function Header() {
  const pathname = usePathname() || "/";

  return (
    <header className="mb-10 tracking-tight mt-10">
      <div className=" lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="fade relative scroll-pr-6  px-0 pb-0 md:relative md:overflow-auto"
            id="nav"
          >
            <div className="flex w-full flex-row justify-between items-center">
              <div className="flex flex-row justify-between">
                {Object.entries(navItems).map(([path, { name }]) => {
                  const isActive = path === pathname;
                  return (
                    <Link
                      key={path}
                      href={path}
                      className={cn(
                        "flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200",
                        !isActive && "text-neutral-500"
                      )}
                    >
                      <span className="relative px-2 py-1">
                        {name}
                        {path === pathname ? (
                          <motion.div
                            className="absolute inset-0 top-7 z-[-1] mx-2 h-[1px] bg-neutral-200 from-transparent to-neutral-900 dark:bg-neutral-800 dark:bg-gradient-to-r"
                            layoutId="sidebar"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 30,
                            }}
                          />
                        ) : null}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div>
                <ThemeToggler />
              </div>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </header>
  );
}