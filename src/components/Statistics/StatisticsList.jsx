import PropTypes from "prop-types";
import Statistics from ".";

const StatisticsList = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul>
        {stats.map((stat) => (
          <Statistics key={stat.id} stat={stat} />
        ))}
      </ul>
    </section>
  );
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default StatisticsList;
