import { h } from 'preact';

const TitleCard = () => {
  return (
    <div style="background: #fff" className="card">
      <div className="logo__container">
        <span class="logo_L">L</span>
        <span class="logo_T">T</span>
      </div>
      <nav>
        <a href="https://github.com/lukeajtodd" className="link">github</a>
        <a href="https://www.facebook.com/omgitstoddy" className="link">facebook</a>
      </nav>
    </div>
  )
};

export default TitleCard;
