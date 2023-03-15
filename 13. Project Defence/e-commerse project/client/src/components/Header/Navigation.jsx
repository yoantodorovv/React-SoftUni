import styles from "./Header.module.scss";

export const Navigation = () => {
    return (
        <nav className={styles['nav']}>
            <ul className={styles['nav-btn-list']}>
                <li className={styles['nav-btn-list-item']}>
                    <a className={styles['nav-btn-li-link']} href="women.html">Women</a>
                </li>
                <li className={styles['nav-btn-list-item']}>
                    <a className={styles['nav-btn-li-link']} href="men.html">Men</a>
                </li>
                <li className={styles['nav-btn-list-item']}>
                    <a className={styles['nav-btn-li-link']} href="men.html">Login</a>
                </li>
                <li className={styles['nav-btn-list-item']}>
                    <a className={styles['nav-btn-li-link']} href="men.html">Register</a>
                </li>
                <li className={styles['nav-btn-list-item']}>
                    <a className={styles['nav-btn-li-link']} href="men.html">Logout</a>
                </li>
            </ul>
        </nav>
    );
}