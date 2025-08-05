import Tag from "../Tag";
import { Card, Description, Infos, Title } from "./styles";

type Props = {
  title: string;
  category: string;
  system: string;
  description: string;
  infos: string[];
  image: string;
};

export default function Product({
  category,
  description,
  image,
  infos,
  system,
  title,
}: Props) {
  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Title>{title}</Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Description>{description}</Description>
    </Card>
  );
}
