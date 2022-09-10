import {Navbar, Container} from 'react-bootstrap'
import {useState, useEffect} from 'react'

export const navbar = () => {
  const [link, setLink] = useState("home")
  const [scolled, setScolled] = useState(false)
  
  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50){
        setScolled(true)
      }else{
        setScolled(false)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)

  }, [])

  const onUpdateActiveLink = (value) => {
    setLink(value);
  }
  return(
  <Navbar bg="light" expand="lg" className={scrolled ? 'scrolled' : ''}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={''} alt='Logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skilss" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className='navbar-text'>
          <div className='social-icon'>
            <a href='#'><img src={} alt=''></img></a>
            <a href='#'><img src={} alt=''></img></a>
            <a href='#'><img src={} alt=''></img></a>
          </div>
          <button className='vvd' onClick={() => console.log("connected")}><span>Let's Connected</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
};
