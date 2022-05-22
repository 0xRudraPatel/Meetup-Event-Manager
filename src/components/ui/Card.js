import CardStyle from "./Card.module.css";

function Card(props) {
  return <div className={CardStyle.card}>{props.children}</div>;
}

export default Card;
