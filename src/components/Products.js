import React, {useContext} from 'react'
import {DataContext} from './DataProvider'
import {Link} from 'react-router-dom'
import Header from './Header'
export default function Products() {

  const value = useContext(DataContext)
  const [products] = value.products
  const addCart = value.addCart

   return(
        <div className="products" style={productStyle}>
            <Header />
           {
                products.map(product =>(
                    <div className="card" key={product._id}>
                      <Link to={`/details/${product._id}`}>
                      <img src={product.images[0]} height='2000px'alt="" />
                    </Link>
                    <div className="box">
                      <h2 title={product.title}>
                        <Link to={`/details/${product._id}`}>{product.title}</Link>
                      </h2>
                      <p>{product.description}</p>
                      <h4>${product.price}</h4>
                      <button onClick={()=>addCart(product._id)}>
                        Add to cart
                        </button>
                    </div>
                  </div>
                  ))
                }
               </div>
   )
            }
     const productStyle = {
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
} 