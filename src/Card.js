import {h} from 'preact';

const Card = ({ value }) => {

  let background = value;

  console.log(background);

  if (!(/^#(?:[0-9a-f]{3}){1,2}$/i).test(background)) {
    background = `url(${background})`;
  }

  const cardStyles = {
    background: background,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    float: "left",
    height: 300,
    minWidth: 350,
    width: "25%"
  }

  return (
    <div style={cardStyles}></div>
  )
}

export default Card;
