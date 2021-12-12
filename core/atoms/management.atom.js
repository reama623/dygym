import { atom } from "recoil";

export const categoryState = atom({
  key: "selectCategory",
  default: null,
});

export const categoryCreateState = atom({
  key: "createCategoryState",
  default: {
    name: "",
    desc: "",
  },
});

export const exerciseCreateState = atom({
  key: "createExerciseState",
  default: {
    name: "",
    desc: "",
  },
});
