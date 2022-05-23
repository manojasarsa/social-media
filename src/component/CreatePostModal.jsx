import { Modal } from 'react-responsive-modal';

export const CreatePostModal = ({ showCreatePostModal, setShowCreatePostModal  }) => {

    return (
        <Modal
            styles={{
                modal: { width: "30rem", height: "fit-content", paddingTop: "0.2rem", borderRadius: "1rem" },
            }}
            open={showCreatePostModal}
            onClose={showCreatePostModal}
            showCloseIcon={false}
            center={true}
        >
            <div className="flex justify-end">
                <button
                    className="text-lg font-semibold"
                    onClick={() => setShowCreatePostModal(false)}>
                    x
                </button>
            </div>

            <div className="ml-3 flex px-5 py-3">

                <div className="mt-3 w-12 h-12 text-lg flex-none">
                    <img src="https://i.pravatar.cc/300?img=12" className="flex-none w-12 h-12 rounded-full" alt="avatar" />
                </div>

                <div className="w-full px-4">
                    <textarea placeholder="What's happening?" className="resize-none mt-3 pb-3 w-full h-28 bg-slate-100 focus:outline-none rounded-xl p-2" >
                    </textarea>

                    <div className="flex justify-end">
                        <button className="p-2.5 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out">Post</button>
                    </div>
                </div>
            </div>
            

        </Modal>
    )
};