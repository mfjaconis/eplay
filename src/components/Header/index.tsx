import { HeaderBar, Links, LinkItem, Nav, LinkCart } from "./styles";

import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/cart.svg";

interface MenuNav {
  link: string;
}

const menuNavLink: MenuNav[] = [
  {
    link: "Catergoria",
  },
  {
    link: "Novidades",
  },
  {
    link: "Promoções",
  },
];

export default function Header() {
  return (
    <HeaderBar>
      <div>
        <LinkItem to={`/`}>
          <img src={logo} alt="EPLAY" />2
        </LinkItem>
        <Nav>
          <Links>
            {menuNavLink.map((item, index) => (
              <LinkItem to={`/${item.link}`} key={index}>
                {item.link}
              </LinkItem>
            ))}
          </Links>
        </Nav>
      </div>

      <LinkCart to={`/cart`}>
        0 - produto(s)
        <img src={cart} alt="Carrinho de compra" />
      </LinkCart>
    </HeaderBar>
  );
}
