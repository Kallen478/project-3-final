import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "./style.css";
import CartContext from "../utils/CartContext";

function ProductItem(props) {
  
    const {
        // name,
        // setName,
        // availability,
        // setAvailability,
        // quantity,
        // setQuantity,
        // price,
        // setPrice,
        // image,
        // setImage,
        // productid,
        // setProductid,
        addProductToCart,
        refreshCart
      } = useContext(CartContext);

    //   const { total, subtotal, shipping, products, setProducts, setShipping, setSubtotal, setTotal,addProductToCart,refreshCart } = useContext(CartContext);

    //      setName(name);
    //   setAvailability(available);
    //   setQuantity(quantity);
  
    //   setPrice(price1);
    //   setImage(image1);
    //   setProductid(_id);


  const [products, setProducts] = useState([]);

  // Load all products and store them with setProducts
  useEffect(() => {
    loadProducts();
  }, []);

  // Loads all products and sets them to products
  function loadProducts() {
    API.getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }

  const handleAddToCart = (event) => {
    // if the user hits the button to add to cart, this function will fire
    event.preventDefault();
    const thisElement = event.target;
    const price = thisElement.getAttribute("data-price");
    const _id = thisElement.getAttribute("data-id");
    const name = thisElement.getAttribute("data-name");
    const availability = thisElement.getAttribute("data-available");
    const image = thisElement.getAttribute("data-image");

// helpJA(name, available,quantity ,price1, image1, _id);
    console.log(price);
    console.log(_id);
    console.log(name);
    console.log(availability);

    addProductToCart(name, availability, 1, price, 10.00, image, "check it")

  

    // setEmail(data.data.email);

    // value.addToCart(id)
    // value.openModal(id);
  };

  // const { title, img, price, inCart, id } = props.product

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-sm-9 mx-auto col-md-6 col-lg-3 my-3">
          {console.log(product)}
          <div className="card">
            {/* <ProductConsumer> */}
            {/* <Products> */}

            {/* <div onClick={() => { value.handleDetail(id); }} className="img-container p-5"> */}
            <div className="img-container p-5">
              <Link to="/details">
                <img
                  src={product.image}
                  alt={product.productName}
                  className="card-img-top"
                />
              </Link>
              <button
                className="cart-btn"
                disabled={product.inCart ? true : false}
                onClick={handleAddToCart}
              >
                {product.inCart ? (
                  <p
                    className="text-capitalize mb-0"
                    disabled
                    data-product={product._id}
                    data-price={product.price.toString()}
                  >
                    In Cart
                  </p>
                ) : (
                  <p
                    className="text-capitalize mb-0"
                    data-name={product.productName}
                    data-image={product.image}
                    data-available={product.isAvailable}
                    data-id={product._id}
                    data-price={product.price.toString()}
                  >
                    Add to Cart <i className="fa fa-cart-plus" />
                  </p>
                )}
              </button>
            </div>

            {/* </Products> */}
            {/* </ProductConsumer> */}
            <div className="card-footer d-flex justify-content-between">
              <p className="align-serl-center mb-0">{product.productName}</p>
              <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">${product.price}</span>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductItem;
