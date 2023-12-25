import "../styles/featured.css";
import { slides } from "../data/carouselData.js";
import Carousel from "./Carousel";

export default function Featured() {
  return (
    <>
      <section className="featured_item_wrapper">
        <h4>Check Out Today's Market</h4>
        <Carousel data={slides} />
      </section>
    </>
  );
}
