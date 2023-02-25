import React from "react"
import "./Navbar.css"
function Navbar() {

  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
      <nav className="navbar navbar-expand navbar-dark bg-dark"  >
        <div className="container-fluid">
          <em className="navbar-brand text-center">GiphySearch</em>
        </div>
      </nav>
    </div>
  )
}
export default Navbar