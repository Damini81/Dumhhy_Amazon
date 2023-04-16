import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Amazon</a>
      </header>
      <main>
        <h1>Featured Product</h1>
        <div className="Products">
          {data.products.map((product) => (
            <div className="Product" key={product.slug}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
