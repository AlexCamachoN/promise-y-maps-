export function Item({ product }) {
    return (
      
      <div className="container mt-4">
        <div className="row">
          <div className=" col-md-4">
            <div className="card">
              <div className="card-body">
                      {product.title}
                        <hr />
                        {product.price}
                        <img
                          src={product.pictureUrl}
                          alt={product.title}
                          className="h-full w-75"
                        />
                        <hr />
                        In Stock: {product.stock}
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }