import {h} from 'preact';

const Card = ({ value, hover, leave }) => {

  const cardStyles = {
    float: "left",
    height: 250,
    minWidth: 350,
    border: "2px solid #000",
    overflow: "hidden",
    position: "relative",
    width: "25%"
  }

  const imgStyles = {
    width: "100%",
    height: "auto",
  }

  return (
    <div style={cardStyles} onMouseOver={hover} onMouseLeave={leave} className="card">
      <div className="cardOverlay"></div>
      <img style={imgStyles} src={value} role="presentation"></img>
    </div>
  )
}

export default Card;
