import { useEffect, useState } from 'react';

import * as userService from './services/UserService';
import * as userDtos from './DTOs/UserDto';

import Header from './assets/Header'
import Footer from './assets/Footer'
import Search from './assets/Search'
import UserList from './assets/UserList'
import Pagination from './assets/Pagination'

import './App.css';
import AddUser from './assets/AddUser';

function App() {
    const [users, setUsers] = useState([]);
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        userService.getAll()
            .then(setUsers)
            .catch(err => {
                console.log(err);
            });
    }, []);

    const onAddUser = () => setIsSelected(true);

    const onAddSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const values = Object.fromEntries(data.entries());

        const userData = userDtos.getDto(values);
        userService.addUser(userData);
    }

    const onAddClose = () => setIsSelected(false);

    return (
        <>
            <Header />
            <main className="main">
                {
                    isSelected
                    ? <AddUser onAddSubmit={onAddSubmit} onAddClose={onAddClose} />
                    : null
                }
                <section className="card users-container">
                    <Search />
                    <UserList users={users} />
                    <button className="btn-add btn" onClick={() => onAddUser()}>Add new user</button>
                    <Pagination />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App
