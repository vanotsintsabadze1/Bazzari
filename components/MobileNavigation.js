import { motion } from "framer-motion";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";

export default function MobileNavigation({ setMobMenu }) {
  return (
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
        onClick={() => setMobMenu((prev) => !prev)}
      />
    </motion.div>
  );
}
