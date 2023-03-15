import styles from "./Footer.module.scss";

export const FooterNavigation = () => {
    return (
        <div className={styles['footer-nav']}>
            <div className={styles['footer-map']}>
                <p className={styles['footer-titles']}>Collections</p>
                <a href="women.html" className={styles['footer-options']}>Woman</a>
                <a href="men.html" className={styles['footer-options']}>Men</a>
            </div>
            <div className={styles['footer-profile']}>
                <p className={styles['footer-titles']}>Your Profile</p>
                <a href="/" className={styles['footer-options']}>Login</a>
                <a href="/" className={styles['footer-options']}>Register</a>
            </div>
            <div className="footer-social">
                <p className={styles['footer-titles']}>Follow Us On</p>
                <div className="fimgs">
                    <img src="https://pixsector.com/cache/200e7bcc/av16efeffeed4418c90c1.png" alt="" className="img5"
                        height="50px" />
                    <img src="https://icons.veryicon.com/png/o/miscellaneous/share-308-box/twitter-180.png" alt=""
                        className="img6" height="33px" />
                    <img src="https://img.icons8.com/windows/512/tiktok.png" alt="" className="img7" height="42.5px" />
                </div>
            </div>
        </div>
    );
}