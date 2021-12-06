import classNames from "classnames";

export default function Button({ type, name = "no title", handleClick }) {
  return (
    <div className={classNames("dy__btn")} onClick={handleClick}>
      {name}
    </div>
  );
}
