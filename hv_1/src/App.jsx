import './App.css'
import ProductCard from './components/ProductCard'

const products = [
  {
    id: 1,
    title: 'Спортивні кросівки',
    price: 2599,
    oldPrice: 3299,
    currency: '₴',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    rating: 4.5,
    inStock: true,
    discount: 21,
    badges: ['hit', 'sale'],
  },
  {
    id: 2,
    title: 'Рюкзак мандрівника',
    price: 1499,
    currency: '₴',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80',
    rating: 4,
    inStock: true,
    badges: ['new'],
  },
  {
    id: 3,
    title: 'Елегантні навушники',
    price: 899,
    oldPrice: 1099,
    currency: '₴',
    image: 'https://images.unsplash.com/photo-1516707570267-4b2acea8bc91?auto=format&fit=crop&w=600&q=80',
    rating: 3.5,
    inStock: false,
    discount: 18,
    badges: ['sale'],
  },
]

function App() {
  const handleAddToCart = (id) => {
    console.log('Додано в кошик товар ID:', id)
  }

  return (
    <div className="app-shell">
      <header className="page-header">
          <h1>Магазин товарів</h1>
      </header>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  )
}

export default App
