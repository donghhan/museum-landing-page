"use client";
import "./style.Header.scss";
import { useState, useTransition } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import Link from "next-intl/link";
import close from "@/app/icon/close.svg";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const linkData = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/exhibition", text: "Exhibition" },
    { href: "/contact", text: "Contact" },
  ];

  const languageSelector = (event: React.MouseEvent<HTMLButtonElement>) => {
    const language = event.currentTarget.getAttribute("value") as string;
    startTransition(() => {
      router.replace(pathname, { locale: language });
    });
  };

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
        <li className="language-selector">
          <button id="english" value="en" onClick={languageSelector}>
            EN
          </button>
          <span>&#183;</span>
          <button id="french" value="fr" onClick={languageSelector}>
            FR
          </button>
        </li>
      </ul>
    </header>
  );
}
