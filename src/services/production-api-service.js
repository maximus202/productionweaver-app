import { API_BASE_URL } from '../config';
import TokenService from './token-service';

const ProductionApiService = {
  submitNewUser(data) {
    return fetch(`${API_BASE_URL}/api/users/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then(res => ((!res.ok))
        ? res.json().then((e) => Promise.reject(e))
        : res.json());
  },

  getProductions() {
    return fetch(`${API_BASE_URL}/api/productions/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },

  getProduction(productionId) {
    return fetch(`${API_BASE_URL}/api/productions/${productionId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },

  submitNewProduction(data) {
    return fetch(`${API_BASE_URL}/api/productions/`, {
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(data),
      method: 'POST',
    })
      .then(res => ((!res.ok))
        ? res.json().then((e) => Promise.reject(e))
        : res.json());
  },

  getScenes(productionId) {
    return fetch(`${API_BASE_URL}/api/scenes/production/${productionId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },

  getScene(sceneId) {
    return fetch(`${API_BASE_URL}/api/scenes/scene/${sceneId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
  submitNewScene(data, productionId) {
    return fetch(`${API_BASE_URL}/api/scenes/${productionId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(data),
    })
      .then(res => ((!res.ok))
        ? res.json().then((e) => Promise.reject(e))
        : res.json())
  },

  getElements(sceneId) {
    return fetch(`${API_BASE_URL}/api/elements/scene/${sceneId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json());
  },

  submitNewElement(data, sceneId) {
    return fetch(`${API_BASE_URL}/api/elements/scene/${sceneId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(data),
    })
      .then(res => ((!res.ok))
        ? res.json().then((e) => Promise.reject(e))
        : res.json())
  },
};

export default ProductionApiService;
