import {h} from 'preact';

const Card = ({ image, hover, leave }) => {

  const border = "4px solid #000";
  const borderBottomFix = "-2px";

  const cardStyles = {
    float: "left",
    height: 250,
    minWidth: 350,
    borderTop: border,
    borderRight: border,
    borderBottom: border,
    marginBottom: borderBottomFix,
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
      <a href={image} className="cardWrapper">
        <div className="cardOverlay"></div>
        <img style={imgStyles} src={image} role="presentation"></img>
        <div className="extLink" style={extStyles}>
          <img style={extLinkStyles} src={require('./images/ext.png')} alt="external link"></img>
        </div>
      </a>
    </div>
  )
}

export default Card;
