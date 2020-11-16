import {Fetch_Exercise, Create_Exercise, Fetch_Regimen, Create_Regimen} from '../action/index'

const initialState = {
exercises: [],
regimen: []
  };
  
  export const reducer = (state = initialState, action) => {
    console.log(action.payload, "action.payload")
    console.log(state.regimen, "action.regime")
    switch (action.type){

      case Fetch_Exercise:
        return {
          ...state,
          exercises: action.payload
        };
        case Create_Exercise:
          return {
            ...state,
            exercises: [...state.exercises, action.payload[0]]
          };
        case Fetch_Regimen:
            return{
              ...state,
              regimen: action.payload
            };
        case Create_Regimen:
              return {
                ...state,
                regimen: [...state.regimen, action.payload[0]]
              };

        default:
            return state;
    }
  }