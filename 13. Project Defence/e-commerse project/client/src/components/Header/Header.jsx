import { Navigation } from "./Navigation";

import styles from "./Header.module.css"

export const Header = () => {
    return (
        <header className={styles['header']}>
            <div className={styles['logo']}>
                <h1>Name</h1>
            </div>
            <Navigation />
        </header>
    );
}