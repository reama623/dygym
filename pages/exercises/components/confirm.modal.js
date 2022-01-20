import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ConfirmModal({ modal, onClose, title, handleSubmit }) {
  return (
    <Modal
      open={modal.isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
          {/* {deleteModal.item?.title}를(을) 삭제하시겠습니까? */}
          {title}
        </Typography>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button
            // onClick={
            //   modal.key === "category" ? deleteCategory : deleteExercise
            // }
            onClick={handleSubmit}
          >
            ok
          </Button>
          <Button onClick={onClose}>cancel</Button>
        </Box>
      </Box>
    </Modal>
  );
}
