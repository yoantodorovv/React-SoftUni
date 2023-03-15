import { NavLink } from 'react-router-dom'

import styles from "./Footer.module.scss"

export const FooterNavigationElement = ({
    title,
    options
}) => {
    return (
        <div className={styles['footer-map']}>
            <h2 className={styles['footer-titles']}>{title}</h2>
            <div className={styles['options-wrapper']}>
                {Object.entries(options).map(x => <NavLink key={`${x[0]}-${x[1]}`} to={x[1]} className={({isActive}) => isActive ? styles['footer-options-selected'] : styles['footer-options']}>{x[0]}</NavLink>)}
            </div>
        </div>
    );
}