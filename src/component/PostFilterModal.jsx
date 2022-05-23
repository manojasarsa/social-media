import { Modal } from 'react-responsive-modal';


export const PostFilterModal = ({ showFilterPostModal, setShowFilterModal  }) => {

    return (
        <Modal
            styles={{
                modal: { width: "20rem", height: "fit-content", paddingTop: "0.2rem" },
            }}
            open={showFilterPostModal}
            onClose={showFilterPostModal}
            showCloseIcon={false}
            center={true}
        >
            <div className="flex justify-end">
                <button
                    className=""
                    onClick={() => setShowFilterModal(false)}>
                    x
                </button>
            </div>

            

        </Modal>
    )
};