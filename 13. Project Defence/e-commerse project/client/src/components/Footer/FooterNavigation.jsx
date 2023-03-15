import styles from "./Footer.module.scss";
import { FooterNavigationElement } from "./FooterNavigationElement";

export const FooterNavigation = () => {
    const pagesRoutes = {
        'Home': '/',
        'About': '/about',
        'Contact': '/contact',
        'Catalog': 'catalog',
        'Women': '/women',
        'Men': '/men',
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