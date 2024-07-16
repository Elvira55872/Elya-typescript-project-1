import { CardWrapper, Avatar, CardItem } from "./styles";
import { SimponsCardProps } from "./types";

function SimponsCard({
  avatar,
  firstName,
  lastName,
  job,
  hobby,
}: SimponsCardProps) {
  return (
    <CardWrapper>
      <Avatar src={avatar} alt="Avatar" />
      <CardItem>Full name: {`${firstName} ${lastName}`}</CardItem>
      <CardItem>Job: {job}</CardItem>
      <CardItem>Hobby: {hobby}</CardItem>
    </CardWrapper>
  );
}

export default SimponsCard;
