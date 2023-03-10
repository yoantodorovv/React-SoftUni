import { useState, useRef, useEffect } from 'react';
import './App.css'

function App() {
    const ref = useRef();
    const [age, setAge] = useState('');
    const [hobbies, setHobbies] = useState({
        hiking: false,
        reading: false,
        sports: false,
        coding: false,
        gaming: false,
    });
    const [formValues, setFormValues] = useState({
        username: 'Evgeni',
        gender: 'male',
        occupation: 'engineering',
        bio: '',
    });

    // useRef Example
    useEffect(() => {
        ref.current.value = formValues.username;
    }, [formValues.username]);

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log(data);
    }

    const onChangeHandler = (e) => 
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));

    const onAgeChange = (e) => 
        setAge(Number(e.target.value));

    const onHobbiesChange = (e) => 
        setHobbies(state => ({...state, [e.target.value]: e.target.checked}));

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                {/* Text */}
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        name="username"
                        id="username"
                        value={formValues.username}
                        onChange={onChangeHandler}
                    />
                </div>
                {/* Number */}
                <div>
                    <label htmlFor="Age">Age</label>
                    <input 
                        type="number"
                        name="age"
                        id="age"
                        value={age || ''}
                        onChange={onAgeChange}
                    />
                </div>
                {/* Select (conditional) */}
                {
                    age >= 18 && (
                        <div>
                            <label htmlFor="occupation">Occupation</label>
                            <select name="occupation" id="occupation" value={formValues.occupation} onChange={onChangeHandler}>
                                <option value="engineering">Engineering</option>
                                <option value="it">IT</option>
                                <option value="medicine">Medicine</option>
                            </select>
                        </div>
                    )
                }
                {/* Radio */}
                <div>
                    <label htmlFor="male">Male</label>
                    <input 
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        onChange={onChangeHandler}
                        checked={formValues.gender === 'male'}
                    />
                    <label htmlFor="female">Female</label>
                    <input 
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        onChange={onChangeHandler}
                        checked={formValues.gender === 'female'}
                    />
                </div>
                {/* Checkbox */}
                <div>
                    <label htmlFor="hiking">Hiking</label>
                    <input 
                        type="checkbox"
                        name="hobbies"
                        id="hiking"
                        value="hiking"
                        onChange={onHobbiesChange}
                        checked={hobbies['hiking']}
                    />
                    <label htmlFor="reading">Reading</label>
                    <input 
                        type="checkbox"
                        name="hobbies"
                        id="reading"
                        value="reading"
                        onChange={onHobbiesChange}
                        checked={hobbies['reading']}
                    />
                    <label htmlFor="sports">Sports</label>
                    <input 
                        type="checkbox"
                        name="hobbies"
                        id="sports"
                        value="sports"
                        onChange={onHobbiesChange}
                        checked={hobbies['sports']}
                    />
                    <label htmlFor="coding">Coding</label>
                    <input 
                        type="checkbox"
                        name="hobbies"
                        id="coding"
                        value="coding"
                        onChange={onHobbiesChange}
                        checked={hobbies['coding']}
                    />
                    <label htmlFor="gaming">Gaming</label>
                    <input 
                        type="checkbox"
                        name="hobbies"
                        id="gaming"
                        value="gaming"
                        onChange={onHobbiesChange}
                        checked={hobbies['gaming']}
                    />
                </div>
                {/* Textarea */}
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea 
                        name="bio"
                        id="bio"
                        cols="30"
                        rows="10"
                        value={formValues.bio}
                        onChange={onChangeHandler}
                    ></textarea>
                </div>
                {/* useRef Example */}
                <div>
                    <label htmlFor="uncontrolled">Uncontrolled</label>
                    <input type="text" ref={ref} name="uncontrolled" id="uncontrolled" />
                </div>
                <div>
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>
    )
}

export default App
