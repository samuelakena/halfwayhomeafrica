import React from 'react';
import Design from '../components/Design';
import products from '../products';

const DesignScreen = () => {
  return (
    <div className="containerfluid">
      <section>
        <div className="design_container">
          {products.map((product) => (
            <div>
              <Design product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DesignScreen;
