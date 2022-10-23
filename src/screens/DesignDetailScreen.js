import React from 'react';
import products from '../products';

const DesignDetailScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <div className="containerfluid">
      <section className="housedetail">
        <div>
          <img
            className="housedetail-image"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="features">
          <h3>{product.name} </h3>

          <table class="table">
            <thead>
              <th scope="col">Key Features</th>
              <th scope="col">Dimensions</th>
            </thead>
            <tbody>
              <tr>
                <td>Width</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Length</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Kitchen</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Dining</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Bedrooms</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Garage</td>
                <td>1</td>
              </tr>
              <tr>
                <td>
                  <strong>Total Area</strong>
                </td>
                <td>
                  <strong>1</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <h5 className="description">Description:</h5>

      <section className="housedetail-description">
        <div></div>
      </section>
    </div>
  );
};

export default DesignDetailScreen;
