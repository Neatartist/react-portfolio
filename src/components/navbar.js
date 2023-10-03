import {useEffect, useState} from 'react';
import {Navbar, Container} from 'react-bootstrap';
import

export const NavBar = () => {
  const[activeLink, setActiveLink] = useState('home');
  const[scrolled, setScrolled] = useState(false);  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (link) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled': ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={''} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active nave-bar-link ' : 'navbar-link'} onClick={() => onUpdateActiveLink ('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active nave-bar-link ' : 'navbar-link'} onClick={() => onUpdateActiveLink ('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active nave-bar-link ' : 'navbar-link'} onClick={() => onUpdateActiveLink ('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/"></a>
                <a href="https://www.linkedin.com/in/"></a>
                <a href="https://www.linkedin.com/in/"></a>
            </div>
          </span>
          <button className='vvd'onClick={() => console.log('connect')}><span>Let's Connect</span></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}