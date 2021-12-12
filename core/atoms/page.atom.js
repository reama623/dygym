import { atom } from "recoil";

export const pageState = atom({
  key: "page",
  default: null,
});

export const modalState = atom({
  key: "modal",
  default: {
    info: {
      title: "",
      name: "",
    },
    isOpen: false,
    component: null,
    closeFn: null,
    submitFn: null,
  },
});
