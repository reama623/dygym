import { useRouter } from "next/router";
import useTodayExercise from "../../../effects/useTodayExercise";
import HandleTodayExercise from "./handleTodayExercise";

export default function UpdateExercise() {
  const { query } = useRouter();
  const { data, isLoading, error } = useTodayExercise(query.seq);
  return <HandleTodayExercise item={data} />;
}
