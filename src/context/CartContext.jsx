import { addDoc, collection, getFirestore } from 'firebase/firestore';
import {createContext, useContext, useState} from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    const [orderId, setOrderId] = useState()
    

    function isInCart(id) {
        return cartList.some(el => el.id === id);
    }
    function addToCart(item) {
        if (isInCart(item.id)) {
            
            let i = cartList.findIndex(el => el.id === item.id)
            const newCartList = cartList
            newCartList[i].count += item.count
            updateCart(newCartList)
        } else {
           
            updateCart([...cartList, item])
        }
    }

    const deleteItem = (id) => {
        const newCartList = cartList.filter(el => el.id !== id);
        updateCart(newCartList);
    }

    const deleteCart = () => {
        updateCart([])
    }

    function updateCart(arr) {
        setCartList(arr);
        setTotalPrice(arr
            .map(curr => curr.count*curr.price)
            .reduce((acc,curr) => acc+curr,0)
        );
        setTotalItems(arr
            .map(curr => curr.count)
            .reduce((acc,curr) => acc+curr,0)
        );
        
    }

    function createOrder(buyerData) { 
    
        let order = {}
    
        order.buyerData = buyerData
        order.totalPrice = totalPrice
        
        order.items = cartList.map(item => {
          const id = item.id
          const name = item.name
          const quantity = item.count
          const price = item.price * item.count
    
          return {id, name, quantity, price}
        })
    
        const db= getFirestore()
        const queryCollectionOrder = collection(db, 'orders')
        addDoc(queryCollectionOrder, order)
        .then(resp => console.log(resp))
        .catch(err=>console.log(err))
        .finally(()=>deleteCart())
    }




    return (
        <CartContext.Provider value = { {
            cartList,
            totalPrice,
            totalItems,
            addToCart,
            deleteItem,
            deleteCart,
            createOrder
        } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider