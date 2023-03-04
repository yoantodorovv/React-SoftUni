const baseUrl = '/api/users';

export const getAll = () => 
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => data.users);

export const getById = (id) =>
    fetch(`${baseUrl}/${id}`)
        .then(res => res.json())
        .then(data => data.user);

//export const 