
export const isUserAlreadyLoggedIn = () => {
    let user  = localStorage.getItem('user');
    return user ? true : false;
}