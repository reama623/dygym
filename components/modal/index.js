import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  const [_document, set_document] = useState(null);
  useEffect(() => {
    set_document(document);
  }, []);
  if (_document) {
    return createPortal(children, _document.getElementsByTagName("body")[0]);
  }
  return <div></div>;
}
