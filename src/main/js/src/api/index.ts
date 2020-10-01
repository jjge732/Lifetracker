import axios from 'axios';
import { BASE_URL } from '../utils/config';

class API {
  axios: any
  constructor() {
    this.axios = axios.create({
      baseURL: `${BASE_URL}/api`
    })
  }
  getUsers = (): Promise<Array<any>> => axios.get('/api/users');
}

const api = new API();

export default api;