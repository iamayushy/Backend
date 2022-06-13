import {createContext, useState, useEffect} from 'react'

const productList = createContext()

const ProductData = ({children}) => {
    const [allProduct, setAllProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product/')
        .then(res => res.json())
        .then(list => setAllProduct(list))
    }, [])
    return(
    <productList.Provider value={{
        PRODUCTS:allProduct 
    }}>
        {children}
    </productList.Provider>
    )
}
export {ProductData, productList}