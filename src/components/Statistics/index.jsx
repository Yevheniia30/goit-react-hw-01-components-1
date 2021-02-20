const Statistics = ({ stat }) => {
  return (
    <li className="item">
      <span className="label">{stat.label} </span>

      <span className="percentage">{stat.percentage} %</span>
    </li>
  );
};

export default Statistics;
