import { h } from 'preact';

const TitleCard = () => {

  const cardStyles = {
    float: "left",
    position: 'relative',
    background: '#fff',
    border: '2px solid #000',
    height: 250,
    minWidth: 350,
    width: "25%"
  }

  return (
    <div style={cardStyles}>
      <div className="logo__container">
        <span class="logo_L">L</span>
        <span class="logo_T">T</span>
      </div>
      <nav>
        <a href="#" className="link">github</a>
        <a href="#" className="link">facebook</a>
      </nav>
    </div>
  )
};

export default TitleCard;
