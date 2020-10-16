import axios from 'axios';
import { BASE_URL } from '../utils/config';
import { User } from '../store/types'

class UserService {
  axios: any
  constructor() {
    this.axios = axios.create({
      baseURL: `${BASE_URL}/api`
    })
  }
  loadUsers = (): Promise<Array<User>> => axios.get('/api/users');
  loginUser = (email: string, password: string): Promise<number> => axios.post('/signin', {
    email,
    password
  })
}
const userService = new UserService()

export default userService;
