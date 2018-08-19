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
    return axios.post('http://localhost:8080/users/', data, {
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

export const fetch_notes_API = (user) => {
    const token = user.token;
    console.log(token);
    // let data = JSON.stringify({
    //     _id: user._id,
    //     email: user.email
    // });

    return axios.get('http://localhost:8080/notes/', {
        headers: {
            "x-auth": token
        }
    }).then((response) => {

        return {
            notes: response.data.notes
        }
    })
}



