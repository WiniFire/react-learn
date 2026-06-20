import { useEffect, useMemo, useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'

const API_URL = 'https://fakestoreapi.com/products'

const getSaleInfo = (product) => {
  const isSale = product.rating?.rate >= 4.2 || product.id % 4 === 0

  if (!isSale) {
    return {
      isSale: false,
      price: product.price,
      oldPrice: null,
      discount: null,
    }
  }

  const discount = product.price > 100 ? 15 : 10
  const oldPrice = Number((product.price / (1 - discount / 100)).toFixed(2))

  return {
    isSale: true,
    price: product.price,
    oldPrice,
    discount,
  }
}

const normalizeProduct = (product) => {
  const saleInfo = getSaleInfo(product)

  return {
    id: product.id,
    title: product.title,
    price: saleInfo.price,
    oldPrice: saleInfo.oldPrice,
    currency: '$',
    image: product.image,
    rating: product.rating?.rate ?? 0,
    ratingCount: product.rating?.count ?? 0,
    inStock: true,
    discount: saleInfo.discount,
    category: product.category,
    isSale: saleInfo.isSale,
    badges: saleInfo.isSale ? ['sale'] : [],
  }
}

function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [onlySale, setOnlySale] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [sortOrder, setSortOrder] = useState('cheap')

  useEffect(() => {
    const controller = new AbortController()

    const loadProducts = async () => {
      try {
        setIsLoading(true)
        setError('')

        const response = await fetch(API_URL, { signal: controller.signal })

        if (!response.ok) {
          throw new Error('Не вдалося завантажити товари')
        }

        const data = await response.json()
        setProducts(data.map(normalizeProduct))
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Сталася помилка під час завантаження')
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    loadProducts()

    return () => controller.abort()
  }, [])

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))].sort(),
    [products],
  )

  const filteredProducts = useMemo(() => {
    const min = minPrice === '' ? 0 : Number(minPrice)
    const max = maxPrice === '' ? Infinity : Number(maxPrice)

    return products
      .filter((product) => product.price >= min && product.price <= max)
      .filter((product) => !onlySale || product.isSale)
      .filter(
        (product) =>
          selectedCategories.length === 0 || selectedCategories.includes(product.category),
      )
      .sort((first, second) =>
        sortOrder === 'cheap' ? first.price - second.price : second.price - first.price,
      )
  }, [maxPrice, minPrice, onlySale, products, selectedCategories, sortOrder])

  const handleCategoryChange = (category) => {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    )
  }

  const handleAddToCart = (id) => {
    console.log('Додано в кошик товар ID:', id)
  }

  return (
    <div className="app-shell">
      <header className="page-header">
        <h1>Магазин товарів</h1>
      </header>

      <section className="catalog-controls" aria-label="Фільтри каталогу">
        <div className="control-group price-filter">
          <h2>Ціна</h2>
          <div className="price-inputs">
            <label>
              Від
              <input
                type="number"
                min="0"
                placeholder="0"
                value={minPrice}
                onChange={(event) => setMinPrice(event.target.value)}
              />
            </label>
            <label>
              До
              <input
                type="number"
                min="0"
                placeholder="999"
                value={maxPrice}
                onChange={(event) => setMaxPrice(event.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="control-group">
          <h2>Категорії</h2>
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={onlySale}
              onChange={(event) => setOnlySale(event.target.checked)}
            />
            Акційні товари
          </label>
          <div className="category-list">
            {categories.map((category) => (
              <label className="checkbox-row" key={category}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        <div className="control-group">
          <h2>Сортування</h2>
          <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
            <option value="cheap">Від дешевих</option>
            <option value="expensive">Від дорогих</option>
          </select>
        </div>
      </section>

      {isLoading && <p className="status-message">Завантаження товарів...</p>}
      {error && <p className="status-message status-message--error">{error}</p>}

      {!isLoading && !error && (
        <>
          <p className="result-count">Знайдено товарів: {filteredProducts.length}</p>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} onAddToCart={handleAddToCart} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="status-message">За цими фільтрами товарів немає</p>
          )}
        </>
      )}
    </div>
  )
}

export default App
