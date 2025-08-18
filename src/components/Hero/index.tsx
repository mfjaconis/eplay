import Button from "../Button";
import Tag from "../Tag";
import { Banner, Infos } from "./style";

export default function Hero() {
  return (
    <Banner>
      <div className="container">
        <div>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$ 250,00</span> <br /> Por R$ 190,00
          </p>
          <Button variant="primary" type="button" title="clique aqui para adicionar este jogo ao carrinho">Adicionar ao carrinho</Button>
        </Infos>
      </div>
    </Banner>
  );
}
