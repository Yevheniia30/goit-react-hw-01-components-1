// import { clearConfigCache } from "prettier";
import s from "./StatisticsList.module.css";

const Statistics = ({ stats, stat }) => {
  return (
    <li
      className={s.item}
      style={{
        backgroundColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        })`,
      }}
    >
      <span className={s.label}>{stat.label} </span>

      <span className={s.percentage}>{stat.percentage} %</span>
    </li>
  );
};

export default Statistics;
