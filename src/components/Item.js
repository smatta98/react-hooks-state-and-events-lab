import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  let cartContents = inCart ? "in-cart" : "";

function addToCart(){
    setInCart((inCart => !inCart))
}

  return (
    <li className={cartContents}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {addToCart} className={inCart ?  "remove" : "add"}>{inCart ?  "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;


// In the Item component, when the user clicks the <button> element, the item should be added to their virtual cart. 
// The way we'll show the user that the item is in the cart is by changing the className on the <li> element:
// If the item is not in the cart, the <button> element's text should read "Add to Cart", 
// and if the item is in the cart, the <button> element's text should read "Remove From Cart". 