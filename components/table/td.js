export default function Td({ item = "No Item", ...rest }) {
  return <td {...rest}>{item}</td>;
}
