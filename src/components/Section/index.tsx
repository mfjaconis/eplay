import type { ReactNode } from "react";
import { Container, Title } from "./styles";

export type Props = {
  title: string;
  background: string;
  children: ReactNode;
};

export default function Section({ title, background, children }: Props) {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        {children}
      </div>
    </Container>
  );
}
