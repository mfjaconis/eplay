import { useEffect, useState } from "react";
import ProductList from "../../components/ProductsList";

export default function Categories() {
  const [actionCategory, setActionCategory] = useState([]);
  const [sportsCategory, setSportsCategory] = useState([]);
  const [simulationCategory, setSimulationCategory] = useState([]);
  const [fightCategory, setFightCategory] = useState([]);
  const [rpgCategory, setRpgCategory] = useState([]);

  useEffect(() => {
    fetch("https://ebac-fake-api.vercel.app/api/eplay/acao")
      .then((response) => response.json())
      .then((response) => setActionCategory(response));

    fetch("https://ebac-fake-api.vercel.app/api/eplay/esportes")
      .then((response) => response.json())
      .then((response) => setSportsCategory(response));

    fetch("https://ebac-fake-api.vercel.app/api/eplay/luta")
      .then((response) => response.json())
      .then((response) => setFightCategory(response));

    fetch("https://ebac-fake-api.vercel.app/api/eplay/simulacao")
      .then((response) => response.json())
      .then((response) => setSimulationCategory(response));

    fetch("https://ebac-fake-api.vercel.app/api/eplay/rpg")
      .then((response) => response.json())
      .then((response) => setRpgCategory(response));
  }, []);


  return (
    <>
      <ProductList title="Esportes" games={sportsCategory} background="black" />
      <ProductList title="Ação" games={actionCategory} background="gray" />
      <ProductList title="Luta" games={fightCategory} background="black" />
      <ProductList title="Simulação" games={simulationCategory} background="gray" />
      <ProductList title="RPG" games={rpgCategory} background="black" />
    </>
  );
}
