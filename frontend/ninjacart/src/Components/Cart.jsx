import { useContext } from "react"
import { cartData } from "../Context/CartContext"
import { Ccard } from "./Ccard"
import {useNavigate} from 'react-router-dom'
const Cart = () => {
    const nav = useNavigate()
    const {CART, fetchCart} = useContext(cartData)
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/cart/${id}`, {
            method:'DELETE',
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
        .then(res => res.json())
        .then(ans => console.log(ans))
        .then(call => fetchCart())

    }
    const handle = (value, id) => {
        if(id.count + value <= 0){
            handleDelete(id._id)
            return
        }
        fetch(`http://localhost:5000/cart/${id._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                "count": id.count + value
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((response) => response.json())
            .then((json) => {
                fetchCart()
            })
            .catch((err) => console.log(err));
    }
    
    return(
        <div>
            <h2 className="move" onClick={() =>nav('/') } >move to home page</h2>
            {CART.length > 0 && CART.map(ele => (
                <Ccard key={ele._id}
                image={ele.image}
                name={ele.name}
                title={ele.title}
                price={ele.Price}
                count={ele.count}
                inc={()=>handle(1, ele)}
                dec={()=>handle(-1, ele)}>
                    <button onClick={() => handleDelete(ele._id)} className="delete">{'Remove From Cart'}</button>
                </Ccard>
                
            ))}
            {CART.length === 0 && <h1 className="banner">Cart Is Empty 🤐</h1>}
        </div>
    )
}
export {Cart}