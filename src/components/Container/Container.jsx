import s from "./Container.module.css";

const Container = ({ children }) => {
  return <div className={s.taskWrapper}>{children}</div>;
};

export default Container;
