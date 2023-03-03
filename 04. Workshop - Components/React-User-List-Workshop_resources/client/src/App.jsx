import { useEffect, useState } from 'react';

import * as userService from './services/UserService';

import Header from './assets/Header'
import Footer from './assets/Footer'
import Search from './assets/Search'
import UserList from './assets/UserList'
import Pagination from './assets/Pagination'

import './App.css';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(setUsers)
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <Header />
                <main className="main">
                    <section className="card users-container">
                        <Search />
                        <UserList users={users} />
                        <button className="btn-add btn">Add new user</button>
                        <Pagination />
                    </section>
                </main>
            <Footer />
        </>
    )
}

export default App
