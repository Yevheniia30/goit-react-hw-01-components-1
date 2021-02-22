import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="taskWrapper">
      <h2 className="taskTitle">Task 4 "TransactionHistory"</h2>
      <table className={s.transactionHistory}>
        <thead>
          <tr className={s.tableHeader}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

TransactionHistory.defaultProps = {
  transactions: [],
};

export default TransactionHistory;
