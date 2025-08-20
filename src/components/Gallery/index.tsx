import { useState } from "react";

import galeryImg from "../../assets/images/galary-img.png";
import spiderman from "../../assets/images/banner-homem-aranha.png";
import play from "../../assets/images/button-play.svg";
import zoom from "../../assets/images/plus-zoom.svg";
import close_icon from "../../assets/images/close_icon.svg";
import {
  Action,
  CloseButton,
  Item,
  Items,
  Modal,
  ModalContent,
} from "./styles";
import type { GalleryItem } from "../../pages/Home";


type Props = {
  defaultCover: string;
  name: string;
};

const mock: GalleryItem[] = [
  {
    type: "image",
    url: galeryImg,
  },
  {
    type: "image",
    url: spiderman,
  },
  {
    type: "video",
    url: "https://www.youtube.com/embed/ccEfgtVwhIo?si=4ywTZlh1nkBMjr6Z",
  },
];

interface ModalState extends GalleryItem {
  isVisible: boolean;
}

export default function Gallery({ defaultCover, name }: Props) {
  const [modalState, setModalState] = useState<ModalState>({
    isVisible: false,
    type: "image",
    url: "",
  });

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === "image") return item.url;
    return defaultCover;
  };

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === "image") return zoom;
    return play;
  };

  return (
    <>
      <Items>
        {mock.map((media, index) => (
          <Item
            key={media.type}
            onClick={() => {
              setModalState({
                isVisible: true,
                type: media.type,
                url: media.url,
              });
            }}
          >
            <img
              src={getMediaCover(media)}
              alt={`Imagem ${index + 1} de ${name}`}
            />
            <Action>
              <img
                src={getMediaIcon(media)}
                alt="Clique aqui para maximizar a mídia"
              />
            </Action>
          </Item>
        ))}
      </Items>

      <Modal className={modalState.isVisible ? "visible" : ""}>
        <ModalContent className="container ">
          <header>
            <h4>{name}</h4>
            <CloseButton
              src={close_icon}
              alt="Botão de fechar"
              onClick={() => {
              setModalState({
                isVisible: false,
                type: 'image',
                url: '',
              });
            }}
            />
          </header>
          {
            modalState.type === "image" ?
            (<img src={modalState.url} />) :
            (
              <iframe src={modalState.url}
              />
            )
          }
        </ModalContent>
      </Modal>
    </>
  );
}
