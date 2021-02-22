export function getToken() {
    return localStorage.getItem('token');
}

export function getID() {
    return localStorage.getItem('userId');
}

export function setToken(token) {
    localStorage.setItem('token', token);
}

export function setID(id) {
    localStorage.setItem('userId', id);
}

export function removeToken(token) {
    localStorage.removeItem('token');
}

export function isLogin() {
    if (localStorage.getItem('token')) {
        return true;
    }
    return false;
}