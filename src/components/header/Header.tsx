"use client";
import "./style.Header.scss";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import close from "@/app/icon/close.svg";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const linkData = [
    { href: "/", text: "About" },
    { href: "/", text: "Gallery" },
    { href: "/", text: "Exhibition" },
    { href: "/", text: "Contact" },
  ];

  console.log(open);

  return (
    <header>
      <div
        className={`hamburger-button${open ? " open" : ""}`}
        onClick={() => setOpen(true)}
      ></div>
      <ul className={`menu${open ? " open" : ""}`}>
        <button className="close-button" onClick={() => setOpen(false)}>
          <Image src={close} alt="close button" fill />
        </button>
        {linkData.map((link) => (
          <li key={link.text}>
            <Link href={link.href} className="link">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
