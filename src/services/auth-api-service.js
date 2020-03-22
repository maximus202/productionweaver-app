import config from '../config';

const AuthApiService = {
    postLogin(credentials) {
        return fetch(`${config.API_BASE_URL}/api/auth/login`, {
            method: 'POST',
            header: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Project.reject(e))
                    : res.json()
            )
    },
}

export default AuthApiService;