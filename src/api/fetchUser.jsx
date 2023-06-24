import axios from 'axios';
 const BASE_URL = 'https://64933012428c3d2035d177da.mockapi.io/user/';

 export const fetchUsers = (page) => {
    return axios.get(`${BASE_URL}user?page=${page}&limit=3`);
 }

 export const fetchUpdateUser = (id, updateUser) => {
   return axios.put(`${BASE_URL}/user/${id}`, updateUser);
 }
  export const fetchOneUser = (id) => {
    return axios.get(`${BASE_URL}/user/${id}`);
  };