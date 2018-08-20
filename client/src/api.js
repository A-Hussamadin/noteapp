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
    //   console.log(token);
    // let data = JSON.stringify({
    //     _id: user._id,
    //     email: user.email
    // });

    return axios.get('http://localhost:8080/notes/', {
        headers: {
            "x-auth": token
        }
    }).then((response) => {
        console.log(response);

        return response.data

    })
}

export const add_note_API = (user, note) => {
    const token = user.token;
    //console.log(note);
    let data = JSON.stringify({
        title: note.title,
        text: note.text
    });

    return axios.post('http://localhost:8080/notes/', data, {
        headers: {
            'Content-Type': 'application/json',
            "x-auth": token
        }
    }).then((response) => {
        console.log("response add ", response);

        return response.data;

    })
}

export const delete_note_API = (user, noteId) => {
    const token = user.token;
    //console.log(note);
    // let data = JSON.stringify({
    //     id: note.title,

    // });

    return axios.delete(`http://localhost:8080/notes/${noteId}`, {
        headers: {
            "x-auth": token
        }
    }).then((response) => {


        return response.data;
    })
}



