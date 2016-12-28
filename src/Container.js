import { h, Component } from 'preact';
import './css/container.css';
import './css/link.css';
import './css/nav.css';
import './css/logo.css';
import './css/card.css';
import Card from './Card';
import TitleCard from './TitleCard';

import CLIENT_ID from './client_id';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    }
  }

  componentDidMount() {
    const self = this;

    // GETs imgur links
    let fetchInit = {
      method: 'GET',
      headers: {
        'Authorization': `Client-ID ${CLIENT_ID}`
      },
      mode: 'cors',
      cache: 'default'
    }

    fetch('https://api.imgur.com/3/album/v4FhY/images', fetchInit)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.data.forEach((data) => {
          self.state.links.push(data.link);
        });
      }).then(function() {
        self.generateCards();
      })
      .then(function() {
        self.setState(self.state);
      });
  }

  generateCards = () => {
    this.Cards = this.state.links.map((image, index) => {
      let thumb = image.split('.');
      thumb[2] += 'l';
      thumb = thumb.join('.');
      return (
        <Card
          key={index}
          image={image}
          thumbnail={thumb}
          hover={this.cardHover}
          leave={this.cardLeave}
          loaded={this.loader}
        />
      )
    });
  }

  loader = (e) => {
    e.target.nextSibling.style.display = "none";
  }

  cardHover = (e) => {
    let cards = document.querySelectorAll('.imageCard');
    cards.forEach((card) => {
      if (card === e.target) {
          card.querySelector('.extLink').style.opacity = 0.9;
      }
      if (card !== e.target) {
          card.querySelector('.cardOverlay').style.opacity = 0.5;
      }
    })
  }

  cardLeave = () => {
    let cards = document.querySelectorAll('.imageCard');
    cards.forEach((card) => {
      card.querySelector('.cardOverlay').style.opacity = 0;
      card.querySelector('.extLink').style.opacity = 0;
    })
  }

  render() {
    return (
      <div className="container">
        <TitleCard />
        {this.Cards}
      </div>
    );
  }
}
