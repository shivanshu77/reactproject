import AreaChartBox from "../../components/areaChartBox/AreaChartBox";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  barChartBoxVisit
} from "../../data";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>

      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box7">
        <AreaChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <h1 className="heading7">Projects</h1>
      <ul className="proj">
        <li>Obstacle Detection System</li>
        <li>Smart Parkng Sytem</li>
        <li>Staff management System</li>


      </ul>
      
      </div>
    </div>
  );
};
