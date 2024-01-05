import "@/styles/steps.css";
import Image from "next/image";

export default function Steps() {
  return (
    <>
      <section className="step_wrapper">
        <div className="step">
          <h4 className="step_name">Find Items</h4>
          <section className="step_text_image_wrapper">
            <p>
              Navigate to the shopping list, pick the desired items and add them
              to your cart
            </p>
            <Image
              src="/imgs/icons/shopping-bag.png"
              width={60}
              height={60}
              sizes="(max-width: 400px) 60px, 128px"
              alt="shopping_bag"
            />
          </section>
        </div>
        <div className="step">
          <h4 className="step_name">Add to Cart</h4>
          <section className="step_text_image_wrapper">
            <p>
              Once you've selected the items, add them to your cart and proceed
              to checkout!
            </p>
            <Image
              src="/imgs/icons/debit-card.png"
              width={60}
              height={60}
              alt="debit_card"
            />
          </section>
        </div>
        <div className="step">
          <h4 className="step_name">Delivery</h4>
          <section className="step_text_image_wrapper">
            <p>
              Congratulations, now you should be expecting delivery from our
              team. It usually takes 2-3 days!
            </p>
            <Image
              src="/imgs/icons/fast-delivery.png"
              width={60}
              height={60}
              alt="delivery"
            />
          </section>
        </div>
      </section>
    </>
  );
}
