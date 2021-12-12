import classNames from "classnames";
import { useRecoilState } from "recoil";
import { exerciseCreateState } from "../../../core/atoms/management.atom";

export default function ExerciseAddModal() {
  const [newExercise, setNewExercise] = useRecoilState(exerciseCreateState);
  const handleExercise = (e) => {
    setNewExercise({
      ...newExercise,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={classNames("dy__exercise-add_modal")}>
      <div className={classNames("dy__exercise-add_modal-title")}>
        <label>이름</label>
        <div className={classNames("dy__exercise-add_modal-title_input")}>
          <input
            name="name"
            value={newExercise.name}
            onChange={handleExercise}
          />
        </div>
      </div>
      <div className={classNames("dy__exercise-add_modal-desc")}>
        <div>설명</div>
        <div className={classNames("dy__exercise-add_modal-desc_text")}>
          <textarea
            name="desc"
            rows={6}
            value={newExercise.description}
            onChange={handleExercise}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
