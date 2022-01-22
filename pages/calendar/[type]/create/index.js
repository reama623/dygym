import { useRouter } from "next/router";
import useTodayExercise from "../../../../effects/useTodayExercise";
import HandleTodayExercise from "../handleTodayExercise";

export default function ExerciseControl() {
  const { query } = useRouter();
  const { type, seq } = query;

  return <HandleTodayExercise type={type}/>;
}
