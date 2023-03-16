import { FooterNavigation } from "./FooterNavigation";

import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['logo']}>
                <h1>Rivet Cloting</h1>
            </div>
            <FooterNavigation />
        </footer>
    );
}