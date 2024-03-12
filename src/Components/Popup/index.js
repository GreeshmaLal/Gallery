import { Modal } from "react-bootstrap"

const Popup = ({header,show,handleClose,children})=>{
    return(

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
       
      </Modal>
    )
}


export default Popup