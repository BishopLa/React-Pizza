import React from 'react'
import classes from './Order.module.css'

const Order = ({closeHour, openHour}) => {
  return (
    
        <div className={classes.order}>
    <p>We are Open from {openHour}:00 until {closeHour}:00. Come visit us or order Online</p>
        <button className={classes.btn}>Order Now</button>
        </div>
  )
}

export default Order