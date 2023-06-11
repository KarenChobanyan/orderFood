const cart = []
const cartReducer = (state = cart,action)=>{
        const {type,payload} = action
      switch (type) {
          case "ADD_an_ORDER":
            state.push(payload)
            return state
            case "Remove_Order":
                let index = state.findIndex((el)=>el.date == payload)
                let tmp = [...state]
                tmp.splice(index,1)
                return tmp;
                case "CONFIRM_ORDER":
                    return []
            
      
        default:
            return state;
      }
}

export default cartReducer