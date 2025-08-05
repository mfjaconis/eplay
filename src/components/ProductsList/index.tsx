import Product from "../Product";
import { Container, List } from "./styles";

export type Props = {
  title: string;
  background: "gray" | "black";
};

export default function ProductList({ background, title }: Props) {
  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          <Product
            category="Ação"
            description="teste"
            image="https://placehold.co/222x250"
            infos={["R$ 199,90", "-10%"]}
            title="Resident Evil 4 - Remake"
            system="Windows"
          />
          <Product
            category="Ação"
            description="teste"
            image="https://placehold.co/222x250"
            infos={["R$ 199,90"]}
            title="Resident Evil 4 - Remake"
            system="Windows"
          />
          <Product
            category="Ação"
            description="teste"
            image="https://placehold.co/222x250"
            infos={["R$ 199,90"]}
            title="Resident Evil 4 - Remake"
            system="Windows"
          />
          <Product
            category="Ação"
            description="teste"
            image="https://placehold.co/222x250"
            infos={["R$ 199,90"]}
            title="Resident Evil 4 - Remake"
            system="Windows"
          />
        </List>
      </div>
    </Container>
  );
}
