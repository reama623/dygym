/**
 * @param {columns} Array:string
 * @returns thead tr list
 */
export default function Thead({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map((column, i) => (
          <th key={i}>{column.name}</th>
        ))}
      </tr>
    </thead>
  );
}
