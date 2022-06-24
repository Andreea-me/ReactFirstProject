import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
        <p>
            <p>{length} List {length ===1 ? "item" : "items"}</p>
        </p>
    </footer>
  )
}

export default Footer