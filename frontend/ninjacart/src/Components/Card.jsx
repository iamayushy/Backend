const Card = ({image, title, name, price, children}) => {



    return(
        <div className="product-card">
            <section className="product-image">
                <img src={image} alt="" />
            </section>
            <section className="product-detail">
                <h2>Brand: {title}</h2>
                <h3>Title: {name}</h3>
                <h4 className="p-price">Price: {price}</h4>
            </section>
            {children}
        </div>
    )
}
export {Card}