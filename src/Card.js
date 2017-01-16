import { h } from 'preact';

const Card = ({

  image,
  hover,
  leave,
  thumbnail,
  loaded

}) => {
  return (
    <div onMouseEnter={hover} onMouseLeave={leave} className="card imageCard">
      <a href={image} className="cardWrapper">
        <div className="cardOverlay"></div>
        <img className="cardContent" data-src={thumbnail} onLoad={loaded} role="presentation"></img>
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
