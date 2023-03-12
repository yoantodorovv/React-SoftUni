import { Link, NavLink } from 'react-router-dom'

import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                {/* <li><NavLink style={({isActive}) => ({color: isActive ? 'blue' : 'white'})} to="/">Home</NavLink></li> */}
                <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : ''} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : ''} to="/about">About</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : ''} to="/characters">Characters</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;