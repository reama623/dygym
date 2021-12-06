import Tr from "./tr";

export default function Tbody({ columns, items }) {
  return (
    <tbody>
      {!items.length && <Tr columns={columns} item={null} />}
      {items.length > 0 &&
        items.map((item, i) => <Tr key={i} columns={columns} item={item} />)}
    </tbody>
  );
}
