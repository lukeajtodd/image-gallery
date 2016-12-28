import {h} from 'preact';

const Card = ({ value }) => {

  const cardStyles = {
    float: "left",
    height: 250,
    minWidth: 350,
    border: "2px solid #000",
    overflow: "hidden",
    width: "25%"
  }

  const imgStyles = {
    width: "100%",
    height: "auto"
  }

  return (
    <div style={cardStyles}>
      <img style={imgStyles} src={value} role="presentation"></img>
    </div>
  )
}

export default Card;
