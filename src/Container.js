import { h, Component } from 'preact';
import './css/link.css';
import './css/nav.css';
import './css/logo.css';
import Card from './Card';
import TitleCard from './TitleCard';

export default class Container extends Component {
  constructor(props) {
    super(props);

    const self = this;

    this.state = {
      links: []
    }

    this.styles = {
      width: "100%",
      margin: "0 auto",
      display: "block"
    };

    let fetchInit = {
      method: 'GET',
      headers: {
        'Authorization': 'Client-ID 3d93ff849ef46c8'
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
        self.Cards = self.state.links.map((image, index) => {
          return ( <Card key={index} value={image}/>  )
        });
      }).then(function() {
        self.setState(self.state);
      });
  }

  render() {
    return (
      <div className="Container" style={this.styles}>
        <TitleCard />
        {this.Cards}
      </div>
    );
  }
}
