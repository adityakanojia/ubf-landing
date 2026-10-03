"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#unique", label: "What Makes Us Different" },
  { href: "#gallery", label: "Gallery" },
];

const drawerLinks = [
  { href: "#about", label: "About UBF" },
  { href: "#pillars", label: "Mission & Vision" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#unique", label: "What Makes Us Different" },
  { href: "#numbers", label: "Our Impact" },
  { href: "#gallery", label: "Gallery" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <>
      <nav id="nav" role="navigation" aria-label="Main navigation">
        <a href="#" className="nav-logo">
          <Image
            src="/ubf-logo.png"
            alt="UBF Logo"
            width={32}
            height={32}
            style={{ borderRadius: '8px', objectFit: 'contain' }}
            priority
          />
          <span className="nav-nm">United Beings Foundation</span>
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a href="#cta" className="nav-cta">
          Get Involved →
        </a>
        <button
          className={`nav-burger${drawerOpen ? " open" : ""}`}
          id="burger"
          aria-label="Menu"
          aria-expanded={drawerOpen}
          aria-controls="drawer"
          onClick={toggleDrawer}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div
        className={`nav-drawer${drawerOpen ? " open" : ""}`}
        id="drawer"
        role="menu"
      >
        <div className="nav-drawer-inner">
          {drawerLinks.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              className="dl"
              role="menuitem"
              onClick={closeDrawer}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="dl nav-drawer-cta"
            role="menuitem"
            onClick={closeDrawer}
          >
            Get Involved →
          </a>
        </div>
      </div>
    </>
  );
}
