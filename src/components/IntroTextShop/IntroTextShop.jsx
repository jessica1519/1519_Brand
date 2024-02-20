import Card from "react-bootstrap/Card";
import styles from "./IntroTextShop.module.css";
import MyImageCarousel from "../CarouselShop/CarouselShop";

function IntroTextShop() {
  return (
    <Card className={styles.card}>
      <MyImageCarousel></MyImageCarousel>
      {/*<section className={styles.containerIntroImgShop}></section>*/}
      <section className={styles.titleIntroShop}>
        <p>
          Ci rivolgiamo principalmente a coloro che cercano un abbigliamento che
          rifletta il loro spirito creativo e ribelle, concentrandosi su design
          ispirati all’arte di strada, alla cultura urbana ed ai movimenti
          giovanili. L’obiettivo principale è creare una comunità di persone che
          si identifichino con il suo concetto di espressione artistica e di
          vita proveniente dalla strada.
        </p>
      </section>
    </Card>
  );
}

export default IntroTextShop;
