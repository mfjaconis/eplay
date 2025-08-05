import { Image, Title, Text } from "./styles";
import bannerHomemAranha from "../../assets/images/banner-homem-aranha.png";
import Tag from "../Tag";
import Button from "../Button";

export default function Banner() {
  return (
    <Image style={{ backgroundImage: `url(${bannerHomemAranha})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>Marvel's Spider-Man: Miles Morales PS4 & PS5</Title>
          <Text>
            De <span>R$ 250,00</span> <br /> por apenas R$ 99,90
          </Text>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  );
}
