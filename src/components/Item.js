import React from "react";

function Item({ item, onAddToCart, onDelete }) {
  function handleAddToCartClick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        isInCart: !item.isInCart
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then((item) => onAddToCart(item)); 
  }

  function handleDeleteItemClick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => onDelete(item)); 

  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"} onClick={handleAddToCartClick}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteItemClick}>Delete</button>
    </li>
  );
}

export default Item;
