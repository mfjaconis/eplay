import type { Game } from "../../pages/Home";
import Product from "../Product";
import { Container, List } from "./styles";

export type Props = {
  title: string;
  background: "gray" | "black";
  games: Game[];
};

export const formatPrice = (price = 0): string => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(price);
};

export default function ProductList({ background, title, games }: Props) {
  const getGameTags = (game: Game) => {
    const tags = [];
    if (game.releaseDate) {
      tags.push(game.releaseDate);
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`);
    }
    if (game.prices.current) {
      tags.push(formatPrice(game.prices.current));
    }

    return tags;
  };

  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.details.category}
              description={game.description}
              image={game.media.thumbnail}
              infos={getGameTags(game)}
              system={game.details.system}
              title={game.name}
            />
          ))}
        </List>
      </div>
    </Container>
  );
}
