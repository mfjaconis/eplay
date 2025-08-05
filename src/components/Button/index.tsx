import { ButtonContainer, ButtonLink } from "./styles";

type Props = {
  type: "button" | "link";
  title: string;
  to?: string;
  onClick?: () => void;
  children: string;
};

export default function Button({ title, type, onClick, to, children }: Props) {
  if (type === "button") {
    return;
    <ButtonContainer type="button" title={title} onClick={onClick}>
      {children}
    </ButtonContainer>;
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  );
}
