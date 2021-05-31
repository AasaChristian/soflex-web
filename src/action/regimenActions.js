import axios from 'axios'
import {Fetch_Regimen, Create_Regimen, Delete_RegimenEx, Update_Regimen, UnComplete, Create_TempRegName, Clear_TempRegName, Set_UserId} from './index'
import {axiosAddress} from '../AxiosAdress'

export const fetchRegimen = (id) => dispatch => {
    axios.get(`${axiosAddress}/api/regimen/find/${id}`)
    .then(res => {
        // console.log(res, "LOOKING FOR REGIMEN NAME")
        const reggy = res.data
        const  names = []
        const completedNames = []
        for (let i = 0; i < reggy.length; i++){
          if (names.includes(reggy[i].regimenName) || reggy[i].completion === true){

        } else {
            names.push(reggy[i].regimenName)
        }  

        if (!completedNames.includes(reggy[i].regimenName) && reggy[i].completion === true){
            completedNames.push([reggy[i].regimenName, reggy[i].link])
        }
        }
        
         dispatch({type: Fetch_Regimen, payload: [res.data, names, completedNames] })
         
    })
    .catch(error => console.log(error, "fetchRegimen action error"))
};

export const createRegimen = (regimen) => dispatch => {
    axios.post(`${axiosAddress}/api/regimen/add`, regimen)
    .then(res => {
        dispatch({type: Create_Regimen, payload: res.data})
    }).catch(error => console.log(error, "createRegimen action error"))
}

export const updateRegimen = (update, regimenId) => dispatch => {
    axios.put(`${axiosAddress}/api/regimen/update/${regimenId}`, update)
    .then(res => {
        dispatch({type: Update_Regimen, payload: res.data})
    }).catch(error => console.log(error, "createRegimen action error"))
}

export const unComplete = (update, link) => dispatch => {
    axios.put(`${axiosAddress}/api/regimen/unComplete/${link}`, update)
    .then(res => {
        dispatch({type: UnComplete, payload: res.data})
    }).catch(error => console.log(error, "uncomplete rigemin action error"))
}

export const deleteRegimenEX = (regimenID) => dispatch => {
    axios.delete(`${axiosAddress}/api/regimen/remove/${regimenID}`)
    .then(res => {
        console.log(res)
        dispatch({type: Delete_RegimenEx, payload: regimenID})
    }).catch(error => console.log(error, "deleteRegimen action error"))
}

export const createTempRegName = (tempName) => {
    return {type: Create_TempRegName, payload: tempName}
}

export const clearTempRegName = () => {
    return {type: Clear_TempRegName}
}

export const setUserId = (id) => {
    return {type: Set_UserId, payload: id}
}