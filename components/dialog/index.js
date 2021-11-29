import classNames from "classnames";
import { useEffect } from "react";

export default function Dialog(props) {
  const { open, handleClose } = props;

  const outsideClick = (e) => {
    // console.log(e.target);
    if (!e.target.closest(".dy__dialog")) {
      handleClose();
    }
  };
  useEffect(() => {
    window.addEventListener("click", outsideClick);

    return () => {
      window.removeEventListener("click", outsideClick);
    };
  }, []);
  return (
    <div id="modalRoot">
      <dialog open={open} className={classNames("dy__dialog")}>
        <div className={classNames("dy__dialog-head")}>head</div>
        <div className={classNames("dy__dialog-content")}>content</div>
        <div className={classNames("dy__dialog-footer")}>footer</div>
      </dialog>
    </div>
  );
}
