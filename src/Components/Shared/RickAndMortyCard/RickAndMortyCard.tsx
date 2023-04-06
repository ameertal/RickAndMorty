import { Result } from "../../Models/RickAndMorty";
import "./RickAndMortyCard.css";

interface RickAndMortyCardProps {
  user: Result;
}
function RickAndMortyCard(props: RickAndMortyCardProps): JSX.Element {
  return (
    <div className="RickAndMortyCard">
      <p className="RickAndMortyCard__name">
        {props.user.id} {props.user.name} {props.user.status} {props.user.species}
      </p>
      <img
        className="RickAndMortyCard__avatar"
        src={props.user.image}
        alt={props.user.name}
      />
    </div>
  );
}

export default RickAndMortyCard;
