import { Box, VStack, Heading, Button, Input } from "@chakra-ui/react";
import { CategoryCard } from "../../components/card";
import useCategory from "../../effects/useCategory";

import Modal from "../../components/modal";
import { useState } from "react";
import ExerciseList from "./components/exerciseList";
import ExerciseAdd from "./components/exerciseAdd";
import axios from "axios";
import { mutate } from "swr";

export default function Management() {
  const { data, isLoading, error } = useCategory();

  const [category, setCategory] = useState({
    name: "",
    desc: "",
  });

  const handleCategory = (e) => {
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value,
    });
  };

  const [modal, setModal] = useState({
    isOpen: false,
  });

  const handleModalClose = (e) => setModal({ ...modal, isOpen: false });

  const handleCategoryClick = (e, category) => {
    setModal({
      ...modal,
      isOpen: true,
      type: "view",
      ...category,
    });
  };

  const handleAddClick = (e) => {
    setModal({
      ...modal,
      isOpen: true,
      name: "운동 분류 추가",
      type: "add",
    });
  };

  const addCategorySubmit = async (e) => {
    await axios.post("/category", { ...category });

    setModal({
      ...modal,
      isOpen: false,
    });
    setCategory({
      name: "",
      desc: "",
    });
    mutate("/get/category");
  };

  const handleSubmit = (e) => {
    if (modal.type === "view") {
      return null;
    }

    if (modal.type === "add") {
      return addCategorySubmit;
    }
  };

  const deleteCategory = async (e, num) => {
    await axios.delete(`/category?num=${num}`);
    mutate("/get/category");
    setModal({
      ...modal,
      isOpen: false,
    });
  };

  const handleDelete = (e) => {
    if (modal.type === "view") {
      return (e) => deleteCategory(e, modal.num);
    }
  };

  return (
    <>
      <VStack spacing={3} alignItems="flex-start">
        <Box ml={2}>
          <Heading as="h2" alignItems="left">
            {`운동 관리 > 분류`}
            <Button ml={2} colorScheme="blue" onClick={handleAddClick}>
              추가
            </Button>
          </Heading>
        </Box>
        <Box display="flex" flexWrap="wrap">
          {isLoading && "Loading..."}
          {!isLoading &&
            data.map((d) => (
              <CategoryCard
                key={d.num}
                item={d}
                handleClick={handleCategoryClick}
              />
            ))}
        </Box>
      </VStack>
      <Modal
        {...modal}
        onClose={handleModalClose}
        handleSubmit={handleSubmit()}
        handleDelete={handleDelete()}
      >
        {modal.type === "view" && <ExerciseList id={modal.num} />}
        {modal.type === "add" && (
          <ExerciseAdd category={category} handleCategory={handleCategory} />
        )}
      </Modal>
    </>
  );
}
