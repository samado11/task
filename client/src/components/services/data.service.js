import axios from 'axios';
import { store } from '../../reducers';

axios.defaults.baseURL = 'https://evening-plains-35255.herokuapp.com/'
axios.interceptors.response.use(res=> res.data, err=> Promise.reject(err.response))

const getAuthHeader = () => ({Authorization: `Bearer ${store.getState().token}`})

export const ApiService = {

    login(item) {
        return axios.post('users/login', item)
    },

    signup(item) {
        return axios.post('users/register', item)
    },

    addToCart(id, item) {
        const data={
          user_id: id,
          item_id:item,
          phone:'2',
          date:'2/22/2002',
          address:'2',
          assigned:"0"
        }
        return axios.post('add', data, {headers: getAuthHeader()})
    },

    getItems() {
        return axios.get('items', {headers: getAuthHeader()})
    },
    getItemsuser(id) {
      const data={
        id:id
      }
        return axios.post('order',data, {headers: getAuthHeader()})
    },
    makeOrder(phone,address,date,id) {
      const data={
        phone: phone,
        address:address,
        date:date,
        user_id:id
      }
        return axios.post('makeOrder',data, {headers: getAuthHeader()})
    }

}
