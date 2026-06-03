function ProductCard({
  id,
  title,
  price,
  oldPrice,
  currency = '₴',
  image,
  rating = 0,
  inStock,
  discount,
  badges = [],
  onAddToCart,
}) {
  const safeRating = Math.min(Math.max(Math.round(rating), 0), 5)
  const ratingText = '★'.repeat(safeRating) + '☆'.repeat(5 - safeRating)
  const oldPriceValue = oldPrice ?? (discount ? Math.round(price / (1 - discount / 100)) : null)

  return (
    <article className="product-card">
      <div className="card-image-wrap">
        <img className="product-image" src={image} alt={title} />
        {badges.length > 0 && (
          <div className="card-badges">
            {badges.map((badge) => (
              <span key={badge} className={`product-badge product-badge--${badge}`}>
                {badge.toUpperCase()}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="card-body">
        <h2 className="product-title">{title}</h2>
        <div className="product-rating">{ratingText}</div>

        <div className="product-price-group">
          {oldPriceValue ? (
            <>
              <span className="price-old">{oldPriceValue}{currency}</span>
              <strong className="price-current">{price}{currency}</strong>
            </>
          ) : (
            <strong className="price-current">{price}{currency}</strong>
          )}
        </div>

        <div className="product-stock">
          {inStock ? 'В наявності' : 'Немає в наявності'}
        </div>

        <button
          type="button"
          className={`product-button ${!inStock ? 'product-button--disabled' : ''}`}
          disabled={!inStock}
          onClick={() => inStock && onAddToCart?.(id)}
        >
          {inStock ? 'В кошик' : 'Немає в наявності'}
        </button>
      </div>
    </article>
  )
}

export default ProductCard
