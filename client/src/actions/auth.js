import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import { login_API, sigup_API } from '../api'
export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT,

})
export function login(credentials) {
    // console.log(credentials);

    return function (dispatch) {
        return login_API(credentials).then(user => {
            //console.log(response);
            localStorage.notappJWT = user.token;
            dispatch(userLoggedIn(user))
        });
    }
}
// export const login = (credentials) => (dispatch) =>
//     login_API(credentials).then(user => {
//         localStorage.notappJWT = user.token;
//         dispatch(userLoggedIn(user))
//     }
//     );

export const signup = (credentials) => (dispatch) =>
    sigup_API(credentials).then(user => {
        localStorage.notappJWT = user.token;
        dispatch(userLoggedIn(user))
    }
    );
export const logout = () => dispatch => {
    localStorage.removeItem('notappJWT');
    dispatch(userLoggedOut())
}

// export const confirm = token => dispatch =>
//     api.user.confirm(token).then(user => {
//         localStorage.bookwormJWT = user.token;
//         dispatch(userLoggedIn(user));
//     });