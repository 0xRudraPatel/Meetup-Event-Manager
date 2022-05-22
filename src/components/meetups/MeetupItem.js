import Card from "../ui/Card";
import MeetupItemStyle from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={MeetupItemStyle.item}>
      <Card>
        <div className={MeetupItemStyle.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={MeetupItemStyle.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={MeetupItemStyle.actions}>
          <button>To Favorite</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
