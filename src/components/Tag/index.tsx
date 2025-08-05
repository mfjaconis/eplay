import { TagContainer } from "./styles";

export type Props = {
  size?: "small" | "big";
  children: string;
};

export default function Tag({ children, size = "small" }: Props) {
  return <TagContainer size={size}>{children}</TagContainer>;
}
