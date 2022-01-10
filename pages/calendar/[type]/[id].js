import { useRouter } from "next/router";

export default function EditExercise() {
  const router = useRouter();
  const { id } = router.query;
  return <div>{id}</div>;
}
