export const toggleActiveItemFilter = (state,action)=>{
  let filterList= state.filterList
  let newList= filterList.map(elt=>{
      if(elt.id ===action.payload){
          elt.isActive =true
      }else{
          elt.isActive =false
      }

      return elt
  })

   state.filterList =newList
  return state
}