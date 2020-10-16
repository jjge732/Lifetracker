import axios from 'axios';
import { BASE_URL } from '../utils/config';

class UserService {
  axios: any
  constructor() {
    this.axios = axios.create({
      baseURL: `${BASE_URL}/api`
    })
  }
  loadUsers = (): Promise<Array<any>> => axios.get('/api/users');
}
const userService = new UserService()

export default userService;
