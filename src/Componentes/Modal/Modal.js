import "./Modal.css"

function Modal({ children, setShowModal }) {


    return (
    <div className="modalContainer">
        <div className="modal">
            <h3>Modal</h3>
           {children}
            <button onClick={() => {setShowModal(false) }}>Hide Modal</button>
        </div>
    </div>
    )
}




export default Modal;