import { useRouter } from "next/router";

export default function EditExercise() {
  const router = useRouter();
  const { id, date } = router.query;
  return <div>{id}, {date}</div>;
}
