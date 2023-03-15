import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['logo']}>
                <h1>Name</h1>
            </div>
            <div className={styles['footer-nav']}>
                <div className={styles['footer-map']}>
                    <p className={styles['footer-titles']}>КОЛЕКЦИИ</p>
                    <a href="women.html" className={styles['footer-options']}>Жени</a>
                    <a href="men.html" className={styles['footer-options']}>Мъже</a>
                </div>
                <div className={styles['footer-profile']}>
                    <p className={styles['footer-titles']}>ТВОЯТ ПРОФИЛ</p>
                    <a href="/" className={styles['footer-options']}>Вход</a>
                    <a href="/" className={styles['footer-options']}>Направи регистрация</a>
                </div>
                <div className="footer-social">
                    <p className={styles['footer-titles']}>ПОСЛЕДВАЙ НИ ТУК</p>
                    <div className="fimgs">
                        <img src="https://pixsector.com/cache/200e7bcc/av16efeffeed4418c90c1.png" alt="" className="img5"
                            height="50px" />
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/share-308-box/twitter-180.png" alt=""
                            className="img6" height="33px" />
                        <img src="https://img.icons8.com/windows/512/tiktok.png" alt="" className="img7" height="42.5px" />
                    </div>
                </div>
            </div>
        </footer>
    );
}