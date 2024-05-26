import "./areaChartBox.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    hard: 4,
    medium: 2,
    easy: 2,
  },
  {
    name: "Mon",
    hard: 3,
    medium: 1,
    easy: 2,
  },
  {
    name: "Tue",
    hard: 2,
    medium: 9,
    easy: 4,
  },
  {
    name: "Wed",
    hard: 2,
    medium: 3,
    easy: 2,
  },
  {
    name: "Thu",
    hard: 1,
    medium: 8,
    easy: 18,
  },
  {
    name: "Fri",
    hard: 3,
    medium: 18,
    easy: 25,
  },
  {
    name: "Sat",
    hard: 4,
    medium: 3,
    easy: 21,
  },
];

const AreaChartBox = () => {
  return (
    <div className="areaChartBox">
      <h1 className="leet">Leetcode Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="easy"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="medium"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="hard"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChartBox;
