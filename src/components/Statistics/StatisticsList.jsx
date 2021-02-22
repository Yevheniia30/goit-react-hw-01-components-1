import PropTypes from "prop-types";
import Container from "../Container/Container";
import Statistics from ".";
import s from "./StatisticsList.module.css";

const StatisticsList = ({ title, stats }) => {
  return (
    <Container>
      <h2 className="taskTitle">Task 2 "Statistics"</h2>
      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}
        <ul className={s.statList}>
          {stats.map((stat) => (
            <Statistics key={stat.id} stat={stat} />
          ))}
        </ul>
      </section>
    </Container>
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
