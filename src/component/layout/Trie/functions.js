export const setItemTriActive = (state,action)=>{
    let triList = state.trieList;
    let newTriList = triList.map(item=>{
        if(item.id === action.payload){
            item.isActive =true
        }else{
            item.isActive =false
        }

        return item
    })

    state.trieList = newTriList;
    return state
}

export const getCurrentActiveItemTri = triItemList => triItemList.find(item=> item.isActive)