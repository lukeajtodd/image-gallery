import {h} from 'preact';

const Card = ({ image, hover, leave }) => {

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

  const extStyles = {
    background: "black",
    width: "24px",
    height: "24px",
    position: "absolute",
    bottom: "1rem",
    right: "1rem",
    cursor: "pointer"
  }

  const extLinkStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }

  return (
    <div style={cardStyles} onMouseEnter={hover} onMouseLeave={leave} className="card">
      <div className="cardOverlay"></div>
      <img style={imgStyles} src={image} role="presentation"></img>
      <div className="extLink" style={extStyles}>
        <a href={image + ""}><img style={extLinkStyles} src={require('./images/ext.png')} alt="external link"></img></a>
      </div>
    </div>
  )
}

export default Card;
