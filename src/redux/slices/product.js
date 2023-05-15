import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[],
    listProduct:[
        {
            id:1,
            name:'Чизбургер-пицца',
            categori:'Мясные',
            img:'01.png',
            size:[
                {value:'26 см.',isActive:true},
                {value:'30 см.',isActive:false},
                {value:'40 см.',isActive:false},
            ],
            type:[
                {
                    value:'тонкое',
                    isActive:true
                },
                {
                    value:'традиционное',
                    isActive:false
                },
            ],
            price:395
        },
        {
            id:2,
            name:'pizza b',
            categori:'Острые',
            img:'02.png',
            size:[
                {value:'26 см.',isActive:true},
                {value:'30 см.',isActive:false},
                {value:'40 см.',isActive:false},
            ],
            type:[
                {
                    value:'тонкое',
                    isActive:true
                },
                {
                    value:'традиционное',
                    isActive:false
                },
            ],
            price:150
        },
        {
            id:3,
            name:'pizza b',
            categori:'Вегетарианская',
            img:'03.png',
            size:[
                {value:'26 см.',isActive:true},
                {value:'30 см.',isActive:false},
                {value:'40 см.',isActive:false},
            ],
            type:[
                {
                    value:'тонкое',
                    isActive:true
                },
                {
                    value:'традиционное',
                    isActive:false
                },
            ],
            price:450
        },
        {
            id:4,
            name:'Чизбургер-пицца',
            categori:'Мясные',
            img:'01.png',
            size:[
                {value:'26 см.',isActive:true},
                {value:'30 см.',isActive:false},
                {value:'40 см.',isActive:false},
            ],
            type:[
                {
                    value:'тонкое',
                    isActive:true
                },
                {
                    value:'традиционное',
                    isActive:false
                },
            ],
            price:395
        },
        {
            id:5,
            name:'pizza b',
            categori:'Острые',
            img:'02.png',
            size:[
                {value:'26 см.',isActive:true},
                {value:'30 см.',isActive:false},
                {value:'40 см.',isActive:false},
            ],
            type:[
                {
                    value:'тонкое',
                    isActive:true
                },
                {
                    value:'традиционное',
                    isActive:false
                },
            ],
            price:150
        },
        {
            id:6,
            name:'pizza b',
            categori:'Вегетарианская',
            img:'03.png',
            size:[
                {value:'26 см.',isActive:true},
                {value:'30 см.',isActive:false},
                {value:'40 см.',isActive:false},
            ],
            type:[
                {
                    value:'тонкое',
                    isActive:true
                },
                {
                    value:'традиционное',
                    isActive:false
                },
            ],
            price:450
        }
    ]
}

 export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{

    }
})

