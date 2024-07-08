import "./styles.css";
import { SimponsCardProps } from "./types";

function SimponsCard({
  avatar,
  firstName,
  lastName,
  job,
  hobby,
}: SimponsCardProps) {
  return (
    <div className="card-wrapper">
      <img className="avatar" src={avatar} alt="Avatar" />
      <p className="card-item">Full name: {`${firstName} ${lastName}`}</p>
      <p className="card-item">Job: {job}</p>
      <p className="card-item">Hobby: {hobby}</p>
    </div>
  );
}

export default SimponsCard;