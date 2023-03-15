import styles from "./Footer.module.scss"

export const FooterNavigationElement = ({
    title,
    options
}) => {
    return (
        <div className={styles['footer-map']}>
            <h2 className={styles['footer-titles']}>{title}</h2>
            <div className={styles['options-wrapper']}>
                {Object.entries(options).map(x => <a key={`${x[0]}-${x[1]}`} href={x[1]} className={styles['footer-options']}>{x[0]}</a>)}
            </div>
        </div>
    );
}