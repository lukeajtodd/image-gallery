import {h} from 'preact';

const Card = ({ color }) => {

  const cardStyles = {
    background: color,
    float: "left",
    height: 300,
    minWidth: 350,
    width: "25%"
  }

  return (
    <div style={cardStyles}></div>
  )
}

export default Card;
