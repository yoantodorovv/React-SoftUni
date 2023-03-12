import { Link, NavLink } from 'react-router-dom'

import styles from './Navigation.module.css'

import NavigationWrapper from './NavigationWrapper';

const Navigation = () => {
    return (
        <NavigationWrapper>
                {/* <li><NavLink style={({isActive}) => ({color: isActive ? 'blue' : 'white'})} to="/">Home</NavLink></li> */}
                <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : ''} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : ''} to="/about">About</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : ''} to="/characters">Characters</NavLink></li>
        </NavigationWrapper>
    );
};

export default Navigation;