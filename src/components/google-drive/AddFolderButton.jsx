import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import { database } from '../../firebase'
import { useAuth } from '../../contexts/AuthContext'
import { ROOT_FOLDER } from '../../hooks/useFolder'

const AddFolderButton = ({ currentFolder }) => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const { currentUser } = useAuth()

  const openModal = () => {
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (currentFolder == null) return

    const path = [...currentFolder.path]

    if (currentFolder !== ROOT_FOLDER) {
      path.push({
        name: currentFolder.name,
        id: currentFolder.id,
      })
    }

    // Create a folder in the database
    closeModal()
    setName('')
    database.folders.add({
      name,
      parentId: currentFolder.id,
      userId: currentUser.uid,
      path,
      createdAt: database.getCurrentTimestamp(),
    })
  }

  return (
    <Button variant='outline-success' size='sm' onClick={openModal}>
      <FontAwesomeIcon icon={faFolderPlus} />
      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Folder Name</Form.Label>
              <Form.Control
                type='text'
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={closeModal}>
              Close
            </Button>
            <Button variant='success' type='submit' onClick={closeModal}>
              Add Folder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Button>
  )
}

export default AddFolderButton
