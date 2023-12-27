import "@/styles/login.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="login_wrapper">
        <h3 className="login_header">Sign In</h3>
        <p className="login_phrase">
          Login in your account and start purchasing!
        </p>
        <section className="input_wrapper">
          <input placeholder="Email" type="text" className="login_field" />
          <input
            placeholder="Password"
            type="password"
            className="login_field"
          />
          <section className="additionals_wrapper">
            <div className="remember_me_container">
              <input type="checkbox" className="rmr_me_checkbox" />
              <p className="remember_me">Remember Me</p>
            </div>
            <Link href="/recovery" className="forgot_pw">
              Forgot Password?
            </Link>
          </section>
          <section className="socials_wrapper">
            <div className="socials_img_wrapper">
              <Image
                src="/imgs/icons/gmail.png"
                width={20}
                height={20}
                alt="gmail_icon"
                className="social_img"
              />
            </div>
            <p>Continue with Gmail</p>
          </section>
        </section>
        <button className="login_button">Sign In</button>
      </div>
    </>
  );
}
