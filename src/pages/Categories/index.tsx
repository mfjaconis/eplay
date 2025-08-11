import ProductList from "../../components/ProductsList";
import type Game from "../../models/Game";
import resident from "../../assets/images/resident.png";
import diablo from "../../assets/images/diablo.png";
import starWars from "../../assets/images/star_wars.png";
import zelda from "../../assets/images/zelda.png";


const promocoes: Game[] = [
    {
        id: 1,
        category:"Ação",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam, aliquid, qui cupiditate, asperiores est saepe laborum totam a eaque doloremque tenetur amet natus hic! Ut quas quis necessitatibus. Quidem!",
        image: resident,
        title: "Residente Evil 4",
        infos: ['10%', "R$250,00"],
        system: "Windows"
    },
    {
        id: 2,
        category:"Ação",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam, aliquid, qui cupiditate, asperiores est saepe laborum totam a eaque doloremque tenetur amet natus hic! Ut quas quis necessitatibus. Quidem!",
        image: diablo,
        title: "Diablo",
        infos: ['10%', "R$250,00"],
        system: "Windows"
    },
    {
        id: 3,
        category:"Ação",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam, aliquid, qui cupiditate, asperiores est saepe laborum totam a eaque doloremque tenetur amet natus hic! Ut quas quis necessitatibus. Quidem!",
        image: starWars,
        title: "Star Wars",
        infos: ['5%', "R$290,00"],
        system: "Windows"
    },
    {
        id: 4,
        category:"Ação",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam, aliquid, qui cupiditate, asperiores est saepe laborum totam a eaque doloremque tenetur amet natus hic! Ut quas quis necessitatibus. Quidem!",
        image: zelda,
        title: "Zelda",
        infos: ['15%', "R$230,00"],
        system: "Windows"
    }
]

const emBreve: Game[] = [
    {
        id: 5,
        category:"Ação",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam, aliquid, qui cupiditate, asperiores est saepe laborum totam a eaque doloremque tenetur amet natus hic! Ut quas quis necessitatibus. Quidem!",
        image: resident,
        title: "Residente Evil 4",
        infos: ['17/05/2026'],
        system: "Windows"
    },
    {
        id: 6,
        category:"Ação",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam, aliquid, qui cupiditate, asperiores est saepe laborum totam a eaque doloremque tenetur amet natus hic! Ut quas quis necessitatibus. Quidem!",
        image: diablo,
        title: "Diablo",
        infos: ['17/05/2026'],
        system: "Windows"
    },
    {
        id: 7,
        category:"Ação",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam, aliquid, qui cupiditate, asperiores est saepe laborum totam a eaque doloremque tenetur amet natus hic! Ut quas quis necessitatibus. Quidem!",
        image: starWars,
        title: "Star Wars",
        infos: ['17/05/2026'],
        system: "Windows"
    },
    {
        id: 8,
        category:"Ação",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam, aliquid, qui cupiditate, asperiores est saepe laborum totam a eaque doloremque tenetur amet natus hic! Ut quas quis necessitatibus. Quidem!",
        image: zelda,
        title: "Zelda",
        infos: ['17/05/2026'],
        system: "Windows"
    }
]

export default function Categories() {
    return (
        <>
            <ProductList title="RPG" games={promocoes} background="gray" />
            <ProductList title="Ação" games={emBreve} background="black" />
            <ProductList title="Aventuras" games={promocoes} background="gray" />
            <ProductList title="FPS" games={promocoes} background="black" />
        </>
    )
}