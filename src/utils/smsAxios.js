import axios from 'axios';

let token = localStorage.getItem('token');
const smsAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URI, // Replace with your API base URL
  timeout: 5000,
  headers: { 'Content-Type': 'application/json', 'X-JWT-Token': token }
}); // Create the axios instance

export default smsAxios;