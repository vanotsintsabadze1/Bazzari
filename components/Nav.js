"use client";
import "@/styles/nav.css";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";

export default function Nav() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className="navigation">
        <h5>ECOMMERCE</h5>
        <Image
          src="/imgs/icons/burger.png"
          width={27}
          height={27}
          className="burgerMenu"
          onClick={() => setMobileMenu((prev) => !prev)}
          priority={true}
          alt="burger"
        />
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ translateX: 110 }}
              animate={{ translateX: 0 }}
              exit={{ translateX: 110 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mobileSideBar"
            >
              <div className="mobile_nav_item_wrapper">
                <Link className="mobile_route" href="/">
                  Home
                </Link>
                <Link className="mobile_route" href="/marketplace">
                  Marketplace
                </Link>
                <Link className="mobile_route" href="/contact">
                  Contact
                </Link>
                <Link className="mobile_route" href="/login">
                  <button className="mobile_login_button">Sign Up</button>
                </Link>
              </div>
              <HiMiniArrowRightOnRectangle
                className="mobileNav_hide_arrow"
                onClick={() => setMobileMenu((prev) => !prev)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
