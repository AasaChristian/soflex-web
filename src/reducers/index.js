

const initialState = {
say: "hello world"
  };
  
  export const reducer = (state = initialState, action) => {
    console.log("payload", action.payload)
    switch (action.type){

        default:
            return state;
    }
  }