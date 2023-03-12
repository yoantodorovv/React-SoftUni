import styles from './Navigation.module.css'

const NavigationWrapper = ({
    children
}) => {
    return (
        <nav className={styles.nav}>
            <ul>
                {children}
            </ul>
        </nav>
    );
}

export default NavigationWrapper;