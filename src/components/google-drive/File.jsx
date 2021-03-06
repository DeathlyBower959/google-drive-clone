import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const File = ({ file }) => {
  console.log(file)
  return (
    <a
      href={file.url}
      target='_blank'
      rel='noreferrer'
      className='btn btn-outline-dark text-truncate w-100'
    >
      <FontAwesomeIcon icon={faFile} style={{ marginRight: '0.5em' }} />
      {file.name}
    </a>
  )
}

export default File
