const Ccard = ({image, name, title, count, price, children, dec, inc}) => {
    return(
        <div className="cart-card">
            <section className="cart-image">
                <img src={image} alt="" />
            </section>
            <section className="cart-detail">
            <h3>{name}</h3>
            <h3>{title}</h3>
            <h3>{price}</h3>
            <section className="cart-up">
                <button onClick={dec}>{'-'}</button>
                <h3>{count}</h3>
                <button onClick={inc}>{'+'}</button>
               
            </section>
            {children}
            </section>
            
        </div>
    )
}
export {Ccard}