import styles from "./Footer.module.scss";

export const FooterNavigation = () => {
    return (
        <div className={styles['footer-nav']}>
            <div className={styles['footer-map']}>
                <h2 className={styles['footer-titles']}>Collections</h2>
                <div className={styles['options-wrapper']}>
                    <a href="women.html" className={styles['footer-options']}>Women</a>
                    <a href="men.html" className={styles['footer-options']}>Men</a>
                </div>
            </div>
            <div className={styles['footer-map']}>
                <h2 className={styles['footer-titles']}>Your Profile</h2>
                <div className={styles['options-wrapper']}>
                    <a href="/" className={styles['footer-options']}>Login</a>
                    <a href="/" className={styles['footer-options']}>Register</a>
                </div>
            </div>
            <div className="footer-map">
                <h2 className={styles['footer-titles']}>Follow Us On</h2>
                <div className={styles['img-wrapper']}>
                    // TODO: Add FontAwesomeIcon
                    {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
                </div>
                <div className={styles['img-wrapper']}>

                </div>
                <div className={styles['img-wrapper']}>

                </div>
            </div>
        </div>
    );
}