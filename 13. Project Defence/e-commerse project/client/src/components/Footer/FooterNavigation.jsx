import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { FooterNavigationElement } from "./FooterNavigationElement";

import styles from "./Footer.module.scss";

export const FooterNavigation = () => {
    const pagesRoutes = {
        'Home': '/',
        'About': '/about',
        'Contact': '/contact',
        'Catalog': '/catalog',
        'Women': 'catalog/women',
        'Men': 'catalog/men',
    }

    const profileRoutes = {
        'Login': '/login',
        'Register': '/register',
        'Logout': '/logout',
    }

    return (
        <div className={styles['footer-nav']}>
            <FooterNavigationElement title="Pages" options={pagesRoutes}/>
            <FooterNavigationElement title="Your Profile" options={profileRoutes} />
            <div className="footer-map">
                <h2 className={styles['footer-titles']}>Follow Us On</h2>
                <div className={styles['icon-wrapper']}>
                    <FontAwesomeIcon className={styles['icon']} icon={faInstagram} size="2x" />
                    <FontAwesomeIcon className={styles['icon']} icon={faTwitter} size="2x" />
                    <FontAwesomeIcon className={styles['icon']} icon={faFacebook} size="2x" />
                </div>
            </div>
        </div>
    );
}