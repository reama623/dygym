import classNames from "classnames";
import Tbody from "./tbody";
import Thead from "./thead";

export default function Table({ columns, data }) {
  return (
    <table className={classNames("dy__table")}>
      <Thead columns={columns} />
      <Tbody columns={columns} items={data} />
    </table>
  );
}
