import classNames from "classnames";
import { useEffect } from "react";

export default function Dialog({ modal, handleClose }) {
  const { title, component: Component } = modal;
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
      <dialog open={modal.isOpen} className={classNames("dy__dialog")}>
        <div className={classNames("dy__dialog-head")}>
          <div className={classNames("dy__dialog-head_title")}>{title}</div>
        </div>
        <div className={classNames("dy__dialog-content")}>
          <Component />
        </div>
        <div className={classNames("dy__dialog-footer")}>
          <div
            className={classNames("dy__dialog-footer_cancel")}
            onClick={handleClose}
          >
            <span>CANCEL</span>
          </div>
        </div>
      </dialog>
    </div>
  );
}
