"use client";
import "@/styles/nav.css";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
              onClick={() => setMobileMenu((prev) => !prev)}
              className="mobileSideBar"
            ></motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
