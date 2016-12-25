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

    const colors = [
      '#E91E63',
      '#00BCD4',
      '#FFC107',
      '#E91E63',
      '#00BCD4',
      '#FFC107',
      '#E91E63',
      '#00BCD4',
      '#FFC107'
    ];

    this.Cards = colors.map((color) => {
      return ( <Card color={color}/>  )
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
