const baseUrl = '/api/users';

export const getAll = () => 
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => data.users);

export const getById = (id) =>
    fetch(`${baseUrl}/${id}`)
        .then(res => res.json())
        .then(data => data.user);

export const deleteUserById = (id) => 
    fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            return data;
        })
        .catch(err => console.log(err));

export const updateById = (id, data) => 
    fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }) 
        .then(res => res.json())
        .then(data => {
            console.log(data.user)

            return data.user;
        })
        .catch(err => console.log(err))

export const addUser = (data) => 
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(data => data.user)
        .catch(err => console.log(err))