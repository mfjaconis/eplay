import { useEffect, useState } from "react";

import Banner from "../../components/Banner";
import ProductList from "../../components/ProductsList";

export interface GalleryItem {
  type: "image" | "video";
  url: string;
}

export type Game = {
  id: number;
  name: string;
  description: string;
  releaseDate?: string;
  prices: {
    discount?: number;
    old?: number;
    current?: number;
  };
  details: {
    category: string;
    system: string;
    developer: string;
    publisher: string;
    languages: string[];
  };
  media: {
    thumbnail: string;
    cover: string;
    gallery: GalleryItem[];
  };
};

export default function Home() {
  const [promocoes, setPromocoes] = useState<Game[]>([]);
  const [emBreve, setEmBreve] = useState<Game[]>([]);

  useEffect(() => {
    fetch("https://ebac-fake-api.vercel.app/api/eplay/promocoes")
      .then((response) => response.json())
      .then((response) => setPromocoes(response));

      fetch("https://ebac-fake-api.vercel.app/api/eplay/em-breve")
      .then((response) => response.json())
      .then((response) => setEmBreve(response));
  }, []);

  return (
    <>
      <Banner />
      {/* <Categories/> */}
      <ProductList title="RPG" games={promocoes} background="gray" />
      <ProductList title="Em Breve" games={emBreve} background="black" />
    </>
  );
}
