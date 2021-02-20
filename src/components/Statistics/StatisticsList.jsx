import PropTypes from "prop-types";
import Statistics from ".";

const StatisticsList = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
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

StatisticsList.defaultProps = {
  stats: [],
};

export default StatisticsList;
