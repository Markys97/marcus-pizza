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
            price:295
        },
        {
            id:2,
            name:'pizza r',
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
            price:1500
        },
        {
            id:3,
            name:'pizza bx',
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
            price:400
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
            price:3950
        },
        {
            id:5,
            name:'pizza z',
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
            price:550
        },
        {
            id:6,
            name:'pizza p',
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
            price:750
        }
    ],
    isCartNotifOpen:false
}

 export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        setTypeProductActive: (state,action)=>{
            let {text,id} = action.payload;
            let listProduct = state.listProduct;
            listProduct = listProduct.map(item=>{
                if(id === item.id){
                    item.type.forEach(elt=>{
                        if(elt.value.toLowerCase()=== text){
                            elt.isActive=true
                        }else{
                            elt.isActive=false
                        }
                    })
                }

                return item
            })
            state.listProduct = listProduct
            return state
        },
        setSizeProductActive: (state,action)=>{
            let {text,id} = action.payload;
            let listProduct = state.listProduct;
            listProduct = listProduct.map(item=>{
                if(id === item.id){
                    item.size.forEach(elt=>{
                        if(elt.value.toLowerCase()=== text){
                            elt.isActive=true
                        }else{
                            elt.isActive=false
                        }
                    })
                }

                return item
            })
            state.listProduct = listProduct
            return state
        },
        addProductInCart: (state,action)=>{
            const {id,sizeProduct,typeProduct,price}= action.payload
            const cart = state.cart;

            if(cart.length===0){
                cart.push({id:id,type:typeProduct,size:sizeProduct,qt:1,price})
                state.cart =cart
                return state
            }
           let isInCart= cart.findIndex(item => {
                if(item.id === id && item.size === sizeProduct && item.type === typeProduct){
                    return item
                }
            })

            if(isInCart===-1){
                cart.push({id:id,type:typeProduct,size:sizeProduct,qt:1,price})
            }else{
                cart[isInCart].qt += 1
            }

           
            
            state.cart = cart

            return state


        },
        cleanCart : (state,action)=> state = {...state,cart:action.payload},
        incrementQt:(state,action) => {
            let cart = state.cart;
            let idProduct = action.payload
            let indexCurrentProduct = cart.findIndex(item=> item.id === idProduct)
            cart[indexCurrentProduct].qt +=1
            state.cart =cart

            return state
        },
        decrementQt:(state,action) => {
            let cart = state.cart;
            let idProduct = action.payload
            let indexCurrentProduct = cart.findIndex(item=> item.id === idProduct)
            cart[indexCurrentProduct].qt -=1
            state.cart =cart

            return state
        },
        removeProductInCart:(state,action)=>{
            let idProduct = action.payload;
            let cart =state.cart;
            cart = cart.filter(item=> item.id !==idProduct)
            state.cart = cart

            return state
        },
        setCartNotifOpen:(state,action)=> state = {...state,isCartNotifOpen:action.payload}
        
    }
})

export const {setTypeProductActive,
    setSizeProductActive,
    addProductInCart,
    cleanCart,
    decrementQt,
    incrementQt,
    removeProductInCart,
    setCartNotifOpen
} = productSlice.actions

