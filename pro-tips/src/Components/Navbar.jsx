import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <div>
          <Link to={"/"}>
        <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
          </Link>
        </div>
        <div className='redirectNavbar'>
          <Link to={'/contact'} style={{textDecoration:"none", color:"white"}}>
            <h1>Contact</h1>
          </Link>
          <Link to={'/form'} style={{textDecoration:"none", color:"white"}}>
            <h1>Form</h1>
          </Link>
        </div>
    </div>
  )
}

export default Navbar