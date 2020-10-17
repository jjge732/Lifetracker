import axios from 'axios';
import { User } from '../store/types'

class UserService {
  axios: any = axios.create({
    baseURL: '/api'
  });
  loadUsers = (): Promise<Array<User>> => this.axios.get('/users');
  loginUser = (email: string, password: string): Promise<number> => this.axios.post('/signin', {
    email,
    password
  }); 
}
const userService = new UserService()

export default userService;
