import { useEffect, useState } from 'react';

import * as userService from './services/UserService';
import * as userDtos from './DTOs/UserDto';
import * as validate from './utils/FormValidation';

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
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        imageUrl: '',
        country: '',
        city: '',
        street: '',
        streetNumber: '',
    });
    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        imageUrl: '',
        country: '',
        city: '',
        street: '',
        streetNumber: '',
    });

    useEffect(() => {
        userService.getAll()
            .then(setUsers)
            .catch(err => {
                console.log(err);
            });
    }, []);

    const onDeleteClick = (id) => {
        userService.deleteUserById(id)
            .catch(err => console.log(err));

        setUsers(state => state.filter(x => x._id != id))
    }

    const onAddUser = () => setIsSelected(true);

    const onAddSubmit = (e) => {
        e.preventDefault();

        const userData = userDtos.getDto(formValues);
        userService.addUser(userData)
            .then(user => setUsers(state => [...state, user]))
            .catch(err => console.log(err));

        onAddClose();
    }

    const onEditSubmitHandler = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const values = Object.fromEntries(data.entries());

        const userData = userDtos.getDto(values);
        userService.updateById(values._id, userData)
            .then(user => {
                setUsers(state => {
                    const newStateArr = state.filter(x => x._id !== values._id);

                    return state = [...newStateArr, user];
                });
            })

        
    }

    const onAddClose = () => setIsSelected(false);

    const onFormChangeHandler = (e) =>
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));

    const onFormBlurHandler = (e) => {
        const errFunctions = {
            firstName: validate.firstName,
            lastName: validate.lastName,
            email: validate.email,
            phoneNumber: validate.phoneNumber,
            imageUrl: validate.imageUrl,
            country: validate.country,
            city: validate.city,
            street: validate.street,
            streetNumber: validate.streetNumber,
        }

        const err = errFunctions[e.target.name](e.target.value);

        console.log(err);

        return setFormErrors(state => ({...state, [e.target.name]: err}));
    }

    return (
        <>
            <Header />
            <main className="main">
                {
                    isSelected
                    ? <AddUser
                        onAddSubmit={onAddSubmit}
                        onAddClose={onAddClose}
                        formValues={formValues}
                        formErrors={formErrors}
                        onFormChangeHandler={onFormChangeHandler}
                        onFormBlurHandler={onFormBlurHandler}
                     />
                    : null
                }
                <section className="card users-container">
                    <Search />
                    <UserList users={users} onDeleteClick={onDeleteClick} onEditSubmitHandler={onEditSubmitHandler} />
                    <button className="btn-add btn" onClick={() => onAddUser()}>Add new user</button>
                    <Pagination />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App
