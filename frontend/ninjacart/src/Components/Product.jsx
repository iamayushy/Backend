import { useState } from "react"
import { useContext } from "react"
import { cartData } from "../Context/CartContext"
import { productList } from "../Context/ProductContext"
import { Card } from "./Card"
const Product = () => {
    const { PRODUCTS } = useContext(productList)
    const { CART, fetchCart } = useContext(cartData)
    const handleID = (id) => {
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            body: JSON.stringify(id),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(res => res.json())
            .then(ans => {fetchCart()})
        
    }

  

    


    return (
        <div>

            <section className="product-box">
                {PRODUCTS.length > 0 && PRODUCTS.map(ele => {
                    return <Card
                        key={ele._id}
                        name={ele.name}
                        title={ele.title}
                        price={ele.Price}
                        image={ele.image}>
                        <section className="add-to-cart">
                            <button onClick={() => handleID(ele)}>{'ADD TO CART'}</button>
                        </section>
                    </Card>
                })}
            </section>
        </div>
    )
}
export { Product }