import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BASE_URL, FETCH_OPTIONS, DELETE } from "../../Api";
import { FaTrashAlt } from "react-icons/fa";

function DeleteEstablishments({ id, deletePath, historyPath }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  function checkDelete() {
    setShow(true);
  }

  async function deleteHotel() {
    const url = BASE_URL + deletePath + id;

    FETCH_OPTIONS.method = DELETE;

    await fetch(url, FETCH_OPTIONS);

    window.location.assign(historyPath);
  }

  return (
    <>
      <Button onClick={checkDelete}>
        Delete <FaTrashAlt className="ml-1" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are you really sure that you want to delete this hotel?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          There are no way to go back after deleting this hotel..
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={deleteHotel}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteEstablishments;
