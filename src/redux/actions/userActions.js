const UPDATE_USER = 'UPDATE_USER';

const updateUser = (name, surname) => {
    return {
        type: 'UPDATE_USER',
        payload: {
                name: name,
                surname: surname
        }
    }
    
}

export { updateUser, UPDATE_USER };