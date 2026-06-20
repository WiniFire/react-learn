import axios from 'axios';

export const getUsers = async () => {
    const response = await axios.get('https://api.github.com/users');

    return response.data;
}

export const getUserDetails = async ({params}) => {
    const userLogin = params.id;

    const response = await axios.get(`https://api.github.com/users/${userLogin}`);

    return response.data;
}
