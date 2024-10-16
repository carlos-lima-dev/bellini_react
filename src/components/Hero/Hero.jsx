import styles from "./Hero.module.css";

const Hero = ({image}) => {
  return (
    <>
      <div className={styles.hero}>
        <img src={image} alt="Hero" />
        <div className={styles.hero_btn_absolute}>
          <h2>BELLINI</h2>
          <div className={styles.btn_book_absolute}>
            <a
              href="https://zappy.pt"
              target="_blank"
              rel="noopener noreferrer">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
