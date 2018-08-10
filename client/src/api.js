import axios from "axios";

export const login_API = (credentials) => {
    let data = JSON.stringify({
        password: credentials.password,
        email: credentials.email
    });
    return axios.post('http://localhost:8080/users/login', data, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {

        return {
            _id: response.data._id,
            email: response.data.email,
            token: response.headers['x-auth']
        }
    })
}


export const sigup_API = (credentials) => {
    let data = JSON.stringify({
        password: credentials.password,
        email: credentials.email
    });

    //console.log(data);
    axios.post('http://localhost:8080/users/', data, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((user) => {

        user;
    })
}


