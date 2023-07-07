import React from "react";
import classes from "./Footer.module.css";
import Order from "../../Components/Order/Order";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //    if (hour >= openHour && hour <= closeHour)
  //    alert("We are currently Opened"); else alert("Sorry we are closed");
  // if (!isOpen)
  // return(
  //     <p>We are Closed</p>
  // );

  // if (!isOpen)
  //     return(
  //         <p>CLOSED</p>
  //     );

  return (
    <footer className={classes.footer}>
      {isOpen ? (
        <Order closeHour={closeHour}  openHour = {openHour}/>
      ) : (
        <p>
          {" "}
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );

  //   return React.createElement('footer', null, "We're currently open!")
};

export default Footer;
