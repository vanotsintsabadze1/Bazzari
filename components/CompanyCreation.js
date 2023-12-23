import "@/styles/compcrt.css";
import Image from "next/image";

export default function CompanyCreation() {
  return (
    <section className="companycrt_wrapper">
      <div className="authorization_image_div">
        <Image src="/imgs/icons/verify.png" width={130} height={130} />
      </div>
      <div className="authorization_text_div">
        <h4>Get Your Company Authorized</h4>
        <p>
          Authorize your company on our website and have a verified seller's
          badge!
        </p>
        <button>AUTHORIZE NOW!</button>
      </div>
    </section>
  );
}
