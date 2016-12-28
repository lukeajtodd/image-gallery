import { h } from 'preact';

const TitleCard = () => {

  const border = "4px solid #000";
  const borderBottomFix = "-2px";

  const cardStyles = {
    background: '#fff',
    borderTop: border,
    borderRight: border,
    borderBottom: border,
    marginBottom: borderBottomFix,
  }

  return (
    <div style={cardStyles} className="card">
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
