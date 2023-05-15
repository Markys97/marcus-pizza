
export const getCurrentFiltreActive =  (listFilter)=>{
    return listFilter.find(itemFilter => itemFilter.isActive)
}