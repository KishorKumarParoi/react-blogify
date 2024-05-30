import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('api/products');
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <h1 className="text-3xl bg-yellow-500 text-bold text-center" >Loading...</h1>
  }

  if (error) {
    return <h1 className="text-3xl bg-yellow-500 text-bold text-center" >Error: {error.message}</h1>
  }

  return (
    <>
      <h1 className="text-3xl bg-yellow-500 text-bold text-center" >Kishor Kumar Paroi</h1>

      <h1> Number of Products : {products.length}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
            <img src={product.thumbnail} alt={product.name} className="w-full h-48 object-cover" />
            <div className="mt-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="mt-4">
                <span className="text-xl font-bold">${product.price}</span>
                <button className="bg-yellow-500 text-white px-4 py-1 rounded-md float-right">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

