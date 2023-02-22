interface prop {
  setShouldDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteModal = ({ setShouldDelete, setShowDeleteModal }: prop) => {
  return (
    <div className="fixed h-screen w-screen flex items-center justify-center ">
      <div className="bg-white px-8 py-8 z-20 rounded flex flex-col items-center">
        Are you sure you want to delete this item ?
      </div>
      <div className="fixed inset-0 bg-black opacity-50 "></div>
    </div>
  );
};

export default DeleteModal;
