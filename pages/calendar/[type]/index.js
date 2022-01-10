import { useRouter } from "next/router";

export default function Edit() {
  const router = useRouter();
  const { type } = router.query;
  return <div>{type}</div>;
}
