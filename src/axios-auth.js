import axios from 'axios';

const instans = axios.create({
  baseURL:
  'https://identitytoolkit.googleapis.com/v1'
});

export default instance;