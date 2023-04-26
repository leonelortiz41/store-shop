import { TiDelete } from "@react-icons/all-files/ti/TiDelete";
export function Modal({ isOpen, closeModal, tittle, children }) {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className='modal_dialog' onClick={handleModalDialogClick}>
                <div className='modal-header row'>
                    <h1 className="col-sm-9 m-auto">{tittle}</h1>
                    <button onClick={closeModal} className="col-sm-3 close m-auto"><TiDelete /></button>
                </div>
                <div className='modal-body'>
                    {children}
                </div>
            </div>
        </div>
    )
}