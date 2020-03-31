module.exports = {
    env: {
        API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000',
        TOKEN_KEY: 'client_auth_token',
    }
}