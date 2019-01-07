import React from 'react';

import { Navbar, Nav, NavDropdown, MenuItem, NavItem, Grid, Row, Col, Image } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar fluid={true}>

          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <div className="menu-header">
                  <Navbar.Header>
                    <Navbar.Brand>
                      <img className="brand-logo" src={'image/logo.png'} ></img>
                    </Navbar.Brand> 
                  </Navbar.Header>
                  
                  <Nav className="padding-menu">
                    <NavItem eventKey={1} className="scroll" href="/#home">
                      Trang Chủ
                      </NavItem>
                    <NavItem eventKey={2} className="scroll" href="/#vetoi">
                      Về Tôi
                        </NavItem>
                    <NavItem eventKey={2} className="scroll" href="/#kinhnghiem">
                      Kinh Nghiệm
                        </NavItem>
                    <NavItem eventKey={2} className="scroll" href="/#portfolio">
                      Portfolio
                         </NavItem>
                         <NavItem eventKey={2} className="scroll" href="/#lienhe">
                     Liên hệ
                         </NavItem>
  
                  </Nav>
                </div>
              </Col>
            </Row>
          </Grid>
      </Navbar>
    )
  }
}

export default Header;