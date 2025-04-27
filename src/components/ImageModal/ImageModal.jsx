import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    maxHeight: "calc(100vh - 100px)",
    boxSizing: "content-box"
  },
};

Modal.setAppElement("#root");

function ImageModal({ isOpen, onClose, image }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <img className="h-[calc(100vh-100px)] object-cover" src={image.urls.regular} alt={image.description} />
    </Modal>
  );
}

export default ImageModal;
