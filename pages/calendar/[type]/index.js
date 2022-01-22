import { useRouter } from "next/router";
import HandleTodayExercise from "./handleTodayExercise";

export default function ExerciseControl() {
  const { query } = useRouter();
  const { type } = query;

  return <HandleTodayExercise type={type} />;
}
