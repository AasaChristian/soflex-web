import axios from 'axios'
import {Fetch_Regimen, Create_Regimen} from './index'
const id = localStorage.getItem('id')

// const axiosAddress = "https://citysoflex.herokuapp.com"
const axiosAddress = "http://localhost:5000"

export const fetchRegimen = () => dispatch => {
    axios.get(`${axiosAddress}/api/regimen/find/${id}`)
    .then(res => dispatch({type: Fetch_Regimen, payload: res.data }))
    .catch(error => console.log(error, "fetchRegimen action error"))
};

export const createRegimen = (regimen) => dispatch => {
    axios.post(`${axiosAddress}/api/regimen/add`, regimen)
    .then(res => {
        dispatch({type: Create_Regimen, payload: res.data})
    }).catch(error => console.log(error, "createRegimen action error"))
}