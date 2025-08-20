import { Image, Title, Text } from "./styles";
import Tag from "../Tag";
import Button from "../Button";
import { useEffect, useState } from "react";
import type { Game } from "../../pages/Home";
import { formatPrice } from "../ProductsList";

export default function Banner() {
  const [gameBanner, setGameBanner] = useState<Game>();

  useEffect(() => {
    fetch("https://ebac-fake-api.vercel.app/api/eplay/destaque")
      .then((response) => response.json())
      .then((response) => setGameBanner(response))
  }, []);

  if(!gameBanner){
   return <div>Carregando...</div>
  }

  return (
    <Image style={{ backgroundImage: `url(${gameBanner?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{gameBanner.name}</Title>
          <Text>
            De <span>{formatPrice(gameBanner.prices.old)}</span> <br /> por apenas {formatPrice(gameBanner.prices.current)}
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
