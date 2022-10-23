import React from 'react';
import { Link } from 'react-router-dom';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import WeekendIcon from '@mui/icons-material/Weekend';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const Design = ({ product }) => {
  return (
    <>
      <div className="card">
        <Link to={`/product/${product._id}`}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
        </Link>

        <div className="card-body">
          <div className="card-title">
            <strong>{product.name} </strong>
          </div>
          <div className="houseicons">
            <div>
              {product.bed} <HotelIcon />
            </div>
            <div>
              {product.bath} <BathtubIcon />
            </div>
            <div>
              {product.lounge} <WeekendIcon />
            </div>
            <div>
              {product.dining} <RestaurantMenuIcon />
            </div>
            <div>
              {product.garage} <DirectionsCarIcon />
            </div>
          </div>
          <Link
            to={`/product/${product._id}`}
            className="btn btn-primary w-100"
          >
            View More Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default Design;
