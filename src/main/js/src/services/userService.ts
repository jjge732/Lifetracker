import axios, { AxiosResponse, AxiosError } from 'axios';
import { promises } from 'dns';
import { JournalEntry, User } from '../store/types'

class UserService {
  axios: any = axios.create({
    baseURL: '/api'
  });
  loadUsers = (): Promise<Array<User>> => this.axios.get('/users');
  loginUser = (email: string, password: string): Promise<JournalEntry> => this.axios.post('/signin', { email, password }); 
  signUpUser = (email: string, password: string): Promise<JournalEntry> => this.axios.post('/signup', { email, password });
}
const userService = new UserService();

export default userService;
