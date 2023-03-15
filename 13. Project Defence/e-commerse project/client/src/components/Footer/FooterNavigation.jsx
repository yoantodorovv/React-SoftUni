import styles from "./Footer.module.scss";
import { FooterNavigationElement } from "./FooterNavigationElement";

export const FooterNavigation = () => {
    const pagesRoutes = {
        'Home': '/',
        'About': '/about',
        'Contact': '/contact',
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
            {/* // <div className={styles['footer-map']}>
            //     <h2 className={styles['footer-titles']}>Your Profile</h2>
            //     <div className={styles['options-wrapper']}>
            //         <a href="/" className={styles['footer-options']}>Login</a>
            //         <a href="/" className={styles['footer-options']}>Register</a>
            //     </div>
            // </div> */}
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