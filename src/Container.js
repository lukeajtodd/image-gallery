import { h, Component } from 'preact';
import './css/link.css';
import './css/nav.css';
import './css/logo.css';
import Card from './Card';
import TitleCard from './TitleCard';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.styles = {
      width: "100%",
      margin: "0 auto",
      display: "block"
    };

    const images = [
      'http://i.imgur.com/OjRz6wM.jpg',
      'https://goo.gl/photos/88hXdo3YqDoxWoJC8',
      'https://goo.gl/photos/88hXdo3YqDoxWoJC8',
      '#00BCD4',
      '#FFC107',
      '#E91E63',
      '#00BCD4',
      '#FFC107',
      '#E91E63',
      '#00BCD4',
      '#FFC107'
    ];

    this.Cards = images.map((image) => {
      return ( <Card value={image}/>  )
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
