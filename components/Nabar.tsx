"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, Info, Mail, CreditCard } from "lucide-react"; // Changed Settings to CreditCard for ERC20

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4" />
    },
    {
      name: "About",
      link: "/about",
      icon: <Info className="h-4 w-4" />
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <Mail className="h-4 w-4" />
    }
  ];

  return (
    <FloatingNav navItems={navItems} />
  );
}
