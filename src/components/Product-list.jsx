
import Product from './Product';

function ProductList({products}) {
  return (
    <div className="max-w-swd mx-auto mb-6 flex overflow-hidden">
      {products && products.map((product) => (
        <Product 
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}
    
export default ProductList;