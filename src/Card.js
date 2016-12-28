import {h} from 'preact';

const Card = ({ image, hover, leave, thumbnail, loaded }) => {

  const border = "4px solid #000";
  const borderBottomFix = "-2px";

  const cardStyles = {
    borderTop: border,
    borderRight: border,
    borderBottom: border,
    marginBottom: borderBottomFix,
  }

  return (
    <div style={cardStyles} onMouseEnter={hover} onMouseLeave={leave} className="card imageCard">
      <a href={image} className="cardWrapper">
        <div className="cardOverlay"></div>
        <img className="cardContent" src={thumbnail} onLoad={loaded} role="presentation"></img>
        <div className="loader">
          <img src={require('./images/puff.svg')} alt="loader"></img>
        </div>
        <div className="extLink">
          <img src={require('./images/ext.png')} alt="external link"></img>
        </div>
      </a>
    </div>
  )
}

export default Card;
