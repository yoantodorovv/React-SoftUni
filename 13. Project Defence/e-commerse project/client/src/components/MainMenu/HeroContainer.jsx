import styles from "./MainMenu.module.css";

export const HeroContainer = ({
    imageSrc,
    containerText,
}) => {
    return (
        <div className={styles['container']}>
            <img className={styles['menu-img']} src={imageSrc} alt={`${containerText} image`} />
            <a className={styles['overlay']} href="/">
                <div className={styles['overlay-text']}>{containerText}</div>
            </a>
        </div>
    );
}