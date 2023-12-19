import React, { useState } from "react";
import { SlBasketLoaded } from "react-icons/sl";
import NewDataArray from "../NewDataArray/NewDataArray";
import "./Header.css";
import { logDOM } from "@testing-library/react";

const showNewData = (newDataArray, onDelete) => {
  let sum = 0;
  newDataArray.forEach((el) => (sum += el.price));

  return (
    <div className="add_product">
      {newDataArray.map((el) => (
        <NewDataArray key={el.id} item={el} onDelete={onDelete} />
      ))}
      <p className="sum">
        <b>price:</b> {new Intl.NumberFormat().format(sum)}
      </p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>no products </h2>
    </div>
  );
};

const Header = ({ newDataArray, onDelete }) => {
  let [cardOpen, setCardOpen] = useState(false);
  console.log(newDataArray);

  const cardClick = () => {
    setCardOpen((!cardOpen));
  };

  return (
    <header>
      <div className="header-nav">
        <span className="logo">house staff</span>
        <ul className="nav-list">
          <SlBasketLoaded
            className={`shop-icon ${cardOpen && "active"}`}
            onClick={cardClick}
          />
          <li>about</li>
          <li>concat</li>
          <li>prices</li>
          {cardOpen && (
            <div className="shop-carde">
              {
                newDataArray.length > 0
                ? showNewData(newDataArray, onDelete)
                : showNothing()
              }
            </div>
          )}
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
