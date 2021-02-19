// import PropTypes from "prop-types";

const Statistics = ({ stat }) => {
  return (
    <li>
      <span>{stat.label} </span>

      <span>{stat.percentage} %</span>
    </li>
  );
};

// Statistics.propTypes = {
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
// };

export default Statistics;
