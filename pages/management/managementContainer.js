import ManagementPresenter from "./managementPresenter";

import { useRecoilState, useRecoilValue } from "recoil";

import Modal from "../../components/modal";

import CategoryAddModal from "./modal/categoryAddModal";
import ExerciseAddModal from "./modal/exerciseAddModal";

import {
  categoryCreateState,
  categoryState,
  exerciseCreateState,
} from "../../core/atoms/management.atom";
import { modalState } from "../../core/atoms/page.atom";
import Dialog from "../../components/dialog";
import { useSWRConfig } from "swr";
import axios from "axios";

const components = {
  CategoryAddModal,
  ExerciseAddModal,
};

function ManagementContainer() {
  const { mutate } = useSWRConfig();
  const [selectCategory, setSelectCategory] = useRecoilState(categoryState);
  const [newCategoryItem, setNewCategoryItem] =
    useRecoilState(categoryCreateState);
  const [newExerciseItem, setNewExerciseItem] =
    useRecoilState(exerciseCreateState);

  const [modal, setModal] = useRecoilState(modalState);
  // const { data, isLoading, error } = useCategory();

  const handleClose = (e) => setModal({ ...modal, isOpen: false });
  const handleOpen = (e, title, name) => {
    const settingModal = {
      ...modal,
      info: {
        title,
        name,
      },
      isOpen: true,
      component: components[`${name.capitalize()}Modal`],
    };
    setModal(settingModal);
  };

  const handleCardClick = (e, category) => {
    setSelectCategory(category);
  };

  const handleModalSubmit = (e, name) => {
    e.preventDefault();
    if (name === "categoryAdd") {
      handleCaregoryAdd();
    }

    if (name === "exerciseAdd") {
      handleExerciseAdd();
    }
  };

  const handleCaregoryAdd = () => {
    axios.post("/category", newCategoryItem).then((o) => {
      setModal({ ...modal, isOpen: false });
      setNewCategoryItem({ ...newCategoryItem, name: "", desc: "" });
      mutate("/get/category");
    });
  };
  const handleExerciseAdd = () => {
    // mutate([`/get/category`, selectCategory.num], false);
    axios
      .post(`/category/list/${selectCategory.num}`, newExerciseItem)
      .then((o) => {
        setModal({ ...modal, isOpen: false });
        setNewExerciseItem({ ...newExerciseItem, name: "", desc: "" });

        mutate([`/get/category/list`, selectCategory.num]);
      });
  };
  return (
    <>
      <ManagementPresenter
        handleCardClick={handleCardClick}
        handleModalSubmit={handleModalSubmit}
        handleCaregoryAdd={handleCaregoryAdd}
        handleExerciseAdd={handleExerciseAdd}
        handleOpen={handleOpen}
      />

      {modal.isOpen && (
        <Modal>
          <Dialog
            modal={modal}
            handleClose={handleClose}
            handleSubmit={handleModalSubmit}
          />
        </Modal>
      )}
    </>
  );
}

export default ManagementContainer;
