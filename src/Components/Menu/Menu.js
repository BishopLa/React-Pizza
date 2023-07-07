import React from "react";
import classes from "./Menu.module.css";
import Pizza from "../../Components/Index/index";
import Logo from '../../Assests/pizzas/focaccia.jpg';
import Logoa from '../../Assests/pizzas/margherita.jpg';
import Logob from '../../Assests/pizzas/spinaci.jpg';
import Logoc from '../../Assests/pizzas/funghi.jpg';
import Logod from '../../Assests/pizzas/salamino.jpg';
import Logoe from '../../Assests/pizzas/prosciutto.jpg';



const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: [Logo],
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: [Logoa],
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: [Logob],
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: [Logoc],
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: [Logod],
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: [Logoe],
    soldOut: false,
  },
];



const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = {}
  const numPizzas = pizzas.length;

  return (
    <main className={classes.container}>
      <h2>Our Menu</h2>

    {numPizzas > 0 ? (
      <React.Fragment> 
       <p>Authentic Italian Cuisine, 6 creative dishes to choose from,
       All from our stone oven, all organic, all delicious
     </p>
      <ul className={classes.pizzas}>
      {pizzaData.map((pizza)=> (
      <Pizza pizzaObj={pizza} key ={pizza.name} /> 
      ))}
      </ul>
      </ React.Fragment>
      ) : <p>We are still working on our food menu, Please check back later :) </p>};

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        PhotoName= {Logo}
        price={10}
      />
      < Pizza 
      name="Pizzas Funghi" 
      ingredients = "Tomato, mozarella, mushrooms, and onion"
      PhotoName = {Logoa}
      price = {12}
      /> */}
    </main>
  );
};

export default Menu;
