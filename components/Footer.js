import "@/styles/footer.css";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer>
        <section className="links_divider">
          <div className="links">
            <h5 className="footer_links_header">Navigate</h5>
            <a className="footer_link">Marketplace</a>
            <a className="footer_link">Authorization</a>
            <a className="footer_link">FAQ</a>
          </div>
          <div className="footer_contact">
            <h5 className="footer_links_header">Support</h5>
            <a className="footer_link">Contact</a>
            <a className="footer_link">dummy@ekom.com</a>
            <a className="footer_link">+032 2 245 912</a>
          </div>
        </section>
        <section className="socials">
          <Image
            src="/imgs/icons/facebook.png"
            width={20}
            height={20}
            alt="fb_img"
          />
          <Image
            src="/imgs/icons/instagram.png"
            width={20}
            height={20}
            alt="instagram_img"
          />
          <Image
            src="/imgs/icons/email.png"
            width={20}
            height={20}
            alt="email_img"
          />
        </section>
        <p className="copyright_phrase">
          © Copyright EKOM 2023. <br /> All Rights Reserved
        </p>
      </footer>
    </>
  );
}
