import { Image, Title, Text } from "./styles";
import bannerHomemAranha from "../../assets/images/banner-homem-aranha.png";

export default function Banner() {
  return (
    <Image style={{ backgroundImage: `url(${bannerHomemAranha})` }}>
      <div className="container">
        <Title>Marvel's Spider-Man: Miles Morales PS4 & PS5</Title>
        <Text>
          De <span>R$ 250,00</span> <br /> por apenas R$ 99,90
        </Text>
      </div>
    </Image>
  );
}
