import {h} from 'preact';

const Card = ({ value }) => {

  const cardStyles = {
    float: "left",
    height: 300,
    minWidth: 350,
    width: "25%"
  }

  const imgStyles = {
    width: "100%",
    height: "100%"
  }

  return (
    <div style={cardStyles}>
      <img style={imgStyles} src={value} role="presentation"></img>
    </div>
  )
}

export default Card;
