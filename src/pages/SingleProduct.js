// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProductDetails } from '../store/products/slices/productDetailsSlice';
// import Button from '../components/Button'; 
// import "./SingleProduct.css";

// const SingleProduct = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { loading, product, error } = useSelector(state => state.productDetails);

//   useEffect(() => {
//     dispatch(fetchProductDetails(id));
//   }, [dispatch, id]);

//   const handleAddToCart = () => {
//     // Add to cart logic here
//   };

//   return (
//     <div className="single-product-container">
//       {loading && <div className="loading">Loading...</div>}
//       {error && <div className="error">Error: {error}</div>}
//       {product && (
//         <div>
//           <div className="product-details">
//             <h1>{product.productname}</h1>
//             <img src={product.image} alt={product.productname} />
//             <p>Brand: {product.productbrand}</p>
//             <p>Info: {product.productinfo}</p>
//             <p>Rating: {product.rating}</p>
//             <p>Price: ${product.price}</p>
//           </div>
//           <div className="product-description">
//             <h2>Description</h2>
//             <p>{product.productinfo}</p>
//           </div>
//           <div className="button-container">
//             <Button
//               className={`add-to-cart-button ${product.stock <= 0 ? 'disabled' : ''}`}
//               onClick={handleAddToCart}
//               text="Add to Cart"
//               width="100%"
//               height="40px"
//               backgroundColor="#000"
//               color="#ffffff"
//               disabled={product.stock <= 0}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SingleProduct;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../store/products/slices/productDetailsSlice';
import Button from '../components/Button'; 
import "./SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product, error } = useSelector(state => state.productDetails);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    // Add to cart logic here
  };

  return (
    <div className="single-product-container">
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      {product && (
        <div>
          <div className="product-details">
            <h1>{product.productname}</h1>
            <img src={product.image} alt={product.productname} className="main-product-image" />
            <p>Brand: {product.productbrand}</p>
            <p>Info: {product.productinfo}</p>
            <p>Rating: {product.rating}</p>
            <p>Price: ${product.price}</p>
          </div>
          <div className="additional-images">
            {product.images.map(image => (
              <img key={image.id} src={image.image} alt={product.productname} className="additional-image" />
            ))}
          </div>
          <div className="product-description">
            <h2>Description</h2>
            <p>{product.productinfo}</p>
          </div>
          <div className="button-container">
            <Button
              className={`add-to-cart-button ${product.stock <= 0 ? 'disabled' : ''}`}
              onClick={handleAddToCart}
              text="Add to Cart"
              width="100%"
              height="40px"
              backgroundColor="#000"
              color="#ffffff"
              disabled={product.stock <= 0}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;

