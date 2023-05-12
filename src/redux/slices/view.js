import { createSlice } from "@reduxjs/toolkit";
import { toggleActiveItemFilter } from "../../component/layout/Filter/actionFilter";
import { setItemTriActive } from "../../component/layout/Trie/functions";

const initialState={
   filterList:[
        {
            id:0,
            text:'все',
            isActive:true
        },
        {
            id:1,
            text:'Мясные',
            isActive:false
        },
        {
            id:2,
            text:'Вегетарианская',
            isActive:false
        },
        {
            id:3,
            text:'Гриль',
            isActive:false
        },
        {
            text:'Острые',
            isActive:false
        },
        {
            id:4,
            text:'Закрытые',
            isActive:false
        }
   ],
   trieList:[
        {
            id:1,
            text:'популярности',
            isActive:true,
        },
        {
            id:2,
            text:'по цене',
            isActive:false,
        },
        {
            id:3,
            text:'по алфавиту',
            isActive:false,
        },
   ]
}

 export const viewSlice = createSlice({
    name:'viewSlice',
    initialState,
    reducers:{
        setToggleActiveItemFilter:(state,action)=>{ toggleActiveItemFilter(state,action)},
        changeItemTriActive: (state,action) => setItemTriActive(state,action)
    }
})

export const {setToggleActiveItemFilter,changeItemTriActive} = viewSlice.actions