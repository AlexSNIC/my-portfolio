import TwiChessImg from "../../assets/portfolio/twichess/twichess.png";
import PathFinderImg from "../../assets/portfolio/pathfinder/pathfinder.png";
import TileMapGeneratorImg from "../../assets/portfolio/tile_map_generator/maze.png";
import DealershipDatabaseImg from "../../assets/portfolio/dealership_database/database.png";
import BellatrixBizantinArtImg from "../../assets/portfolio/bellatrix_bizantin_art/home.png";

import TwiChessPage from "./list/TwiChess"
import PathFinderPage from "./list/PathFinder"
import TileMapGeneratorPage from "./list/TileMapGenerator"
import DealershipDatabasePage from "./list/DealershipDatabase"
import BellatrixBizantinArtPage from "./list/BellatrixBizantinArt"

export default {
  pathfinder: {
    id: "pathfinder",
    title: "PathFinder",
    finished: "May 2024",
    lastUpdated: "May 2024",
    img: PathFinderImg,
    page: PathFinderPage,
    src: "https://github.com/AlexSNIC/Hackathon-RoboCode"
  },
  twichess: {
    id: "twichess",
    title: "TwiChess",
    finished: "June 2023",
    lastUpdated: "June 2023",
    img: TwiChessImg,
    page: TwiChessPage,
    link: "https://alexsnic.github.io/twichess/home.html"
  },
  tilemapgenerator: {
    id: "tilemapgenerator",
    title: "Tile Map Generator",
    finished: "June 2023",
    lastUpdated: "June 2023",
    img: TileMapGeneratorImg,
    page: TileMapGeneratorPage,
    link: "https://alexsnic.github.io/tile-map-generator/"
  },
  dealershipdatabase: {
    id: "dealershipdatabase",
    title: "Dealership Database",
    finished: "In Progress",
    lastUpdated: "August 2025",
    img: DealershipDatabaseImg,
    page: DealershipDatabasePage,
    src: "https://github.com/AlexSNIC/car-dealership"
  },
  bellatrixbizantinart: {
    id: "bellatrixbizantinart",
    title: "Bellatrix Bizantin Art",
    finished: "June 2024",
    lastUpdated: "June 2024",
    img: BellatrixBizantinArtImg,
    page: BellatrixBizantinArtPage,
    src: "https://github.com/AlexSNIC/bellatrix-bizantin-art"
  }
}