export const firstName = (value) => {
    if (value.length < 3) {
        return 'First name should be atleast 3 characters long!';
    } else if (value.length > 50) {
        return 'First name should not be longer than 50 characters!'
    }
}

export const lastName = (value) => {
    if (value.length < 3) {
        return 'Last name should be atleast 3 characters long!';
    } else if (value.length > 50) {
        return 'Last name should not be longer than 50 characters!'
    }
}

export const email = (value) => {
    if (!value.includes('@')) {
        return 'Not a valid email!';
    }
}

export const phoneNumber = (value) => {
    if (value.length < 10) {
        return 'Phone number should be 10 characters long!';
    }
}

export const imageUrl = (value) => {
    if (!value.includes('https://')) {
        return 'Not a valid URL!';
    }
}

export const country = (value) => {
    if (value.length < 3) {
        return 'Country should be atleast 3 characters long!';
    } else if (value.length > 150) {
        return 'Country should not be longer than 150 characters!'
    }
}

export const city = (value) => {
    if (value.length < 2) {
        return 'City should be atleast 3 characters long!';
    } else if (value.length > 150) {
        return 'City should not be longer than 150 characters!'
    }
}

export const street = (value) => {
    if (value.length < 3) {
        return 'Street should be atleast 3 characters long!';
    } else if (value.length > 150) {
        return 'Value should not be longer than 150 characters!'
    }
}

export const streetNumber = (value) => {
    if (typeof value !== 'number') {
        return 'Street should be a number!';
    } else if (Number(value) < 0) {
        return 'Street should not be a negative number!'
    }
}