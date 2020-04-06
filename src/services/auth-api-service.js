import { API_BASE_URL } from '../config';

const AuthApiService = {
  postLogin(credentials) {
    const otherParams = {
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
      method: 'POST',
    };
    return fetch(`${API_BASE_URL}/api/auth/login`, otherParams)
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
};

export default AuthApiService;
