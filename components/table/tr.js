import Td from "./td";

export default function Tr({ columns, item }) {
  if (item) {
    return (
      <tr>
        {columns.map(({ key }, i) => (
          <Td key={i} item={item[key]} />
        ))}
      </tr>
    );
  }
  if (!item) {
    console.log("hihi");
    return (
      <tr>
        <Td colSpan={columns.length} />
      </tr>
    );
  }
}
