import axios from 'axios'
import {Fetch_Exercise, Create_Exercise} from './index'
import {axiosAddress} from '../AxiosAdress'


export const fetchExercise = () => dispatch => {
    axios.get(`${axiosAddress}/api/exercises/all`)
    .then(res => dispatch({type: Fetch_Exercise, payload: res.data}))
    .catch(error => console.log(error, "fetchExercie action error"))
            
    };

    export const createExercise = (exercise) => dispatch => {
        axios.post(`${axiosAddress}/api/exercises/add`, exercise)
        .then(res => {
            dispatch({type: Create_Exercise, payload: res.data})
        }).catch(error => console.log(error, "createExercise action error"))
    }