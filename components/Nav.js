"use client";
import "@/styles/nav.css";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import Link from "next/link";

export default function Nav() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className="navigation">
        <h5>ECOMMERCE</h5>
        <Image
          src="/imgs/logos/logo_no_bg.svg"
          width={30}
          height={30}
          alt="logo"
          className="logo"
        />
        <Image
          src="/imgs/icons/burger.png"
          width={27}
          height={27}
          className="burgerMenu"
          onClick={() => setMobileMenu((prev) => !prev)}
          priority={true}
          alt="burger"
        />
        <div className="desktop_navigation_wrapper">
          <Link className="mobile_route" href="/">
            HOME
          </Link>
          <Link className="mobile_route" href="/marketplace">
            MARKETPLACE
          </Link>
          <Link className="mobile_route" href="/contact">
            CONTACT
          </Link>
          <Link className="mobile_route" href="/login">
            <button className="mobile_login_button">Sign Up</button>
          </Link>
        </div>
        <AnimatePresence>
          {mobileMenu && <MobileNavigation setMobMenu={setMobileMenu} />}
        </AnimatePresence>
      </nav>
    </>
  );
}
