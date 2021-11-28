import Link from "next/link";

function Menus({ handleClick }) {
  return (
    <ul onClick={(e) => handleClick(false)}>
      <Link href="/">
        <li>
          <a>홈</a>
        </li>
      </Link>
      <Link href="/management">
        <li>
          <a>운동 관리</a>
        </li>
      </Link>
      <Link href="/making">
        <li>
          <a>운동 만들기</a>
        </li>
      </Link>
    </ul>
  );
}

export default Menus;
