import s from "./TransactionHistory.module.css";

const TransactionItem = ({ transaction: { type, amount, currency } }) => {
  return (
    <tr className={s.item}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionItem;
