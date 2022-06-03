import {createContext, useContext, useState} from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    

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
        console.log( totalItems)
    return (
        <CartContext.Provider value = { {
            cartList,
            totalPrice,
            totalItems,
            addToCart,
            deleteItem,
            deleteCart
        } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider