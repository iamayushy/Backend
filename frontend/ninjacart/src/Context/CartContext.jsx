import {createContext, useEffect, useState} from 'react'

const cartData = createContext()

const CartContext = ({children}) => {
    const [cartInfo, setCartInfo] = useState([])
    function fetchCart(){
        fetch('http://localhost:5000/cart')
        .then(res => res.json())
        .then(cart => {setCartInfo(cart)})
        .catch(err => console.log(err))

        console.log(cartInfo)
    }
    useEffect(() => {
        fetch('http://localhost:5000/cart')
        .then(res => res.json())
        .then(cart => setCartInfo(cart))
        .catch(err => console.log(err))
    }, [])
    return(
        <cartData.Provider value={{
            CART: cartInfo,
            fetchCart: fetchCart,
            updateCart: setCartInfo
        }}>
            {children}
        </cartData.Provider>
    )
}
export {CartContext, cartData}