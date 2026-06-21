import { Link } from 'react-router-dom'

function ProductCard({
  id,
  title,
  price,
  oldPrice,
  currency = '$',
  image,
  rating = 0,
  ratingCount = 0,
  inStock,
  category,
  discount,
  badges = [],
  onAddToCart,
}) {
  const safeRating = Math.min(Math.max(Math.round(rating), 0), 5)
  const ratingText = '★'.repeat(safeRating) + '☆'.repeat(5 - safeRating)

  return (
    <article className="product-card">
      <Link className="card-image-wrap card-image-link" to={`/${id}`}>
        <img className="product-image" src={image} alt={title} />
        {badges.length > 0 && (
          <div className="card-badges">
            {badges.map((badge) => (
              <span key={badge} className={`product-badge product-badge--${badge}`}>
                {badge === 'sale' ? `-${discount}%` : badge.toUpperCase()}
              </span>
            ))}
          </div>
        )}
      </Link>

      <div className="card-body">
        <span className="product-category">{category}</span>
        <h2 className="product-title">
          <Link to={`/${id}`}>{title}</Link>
        </h2>
        <div className="product-rating" aria-label={`Рейтинг ${rating} з 5`}>
          {ratingText}
          <span>{ratingCount} відгуків</span>
        </div>

        <div className="product-price-group">
          {oldPrice ? (
            <>
              <span className="price-old">
                {currency}
                {oldPrice.toFixed(2)}
              </span>
              <strong className="price-current">
                {currency}
                {price.toFixed(2)}
              </strong>
            </>
          ) : (
            <strong className="price-current">
              {currency}
              {price.toFixed(2)}
            </strong>
          )}
        </div>

        <div className="product-stock">{inStock ? 'В наявності' : 'Немає в наявності'}</div>

        <button
          type="button"
          className={`product-button ${!inStock ? 'product-button--disabled' : ''}`}
          disabled={!inStock}
          onClick={() => inStock && onAddToCart?.(id)}
        >
          {inStock ? 'Додати в кошик' : 'Немає в наявності'}
        </button>
      </div>
    </article>
  )
}

export default ProductCard
