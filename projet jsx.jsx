import React from "react";
import { Navbar, Container, Nav, Card, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">
        {/* Barre de navigation */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Mon Projet React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Accueil</Nav.Link>
                <Nav.Link href="#features">Fonctionnalités</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Titre principal */}
        <Container className="mt-4">
          <h1 className="text-center">Bienvenue sur mon application React-Bootstrap</h1>

          {/* 3 cartes avec une grille responsive */}
          <Row className="mt-4">
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 1</Card.Title>
                  <Card.Text>
                    Ceci est le contenu de la première carte.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 2</Card.Title>
                  <Card.Text>
                    Ceci est le contenu de la deuxième carte.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 3</Card.Title>
                  <Card.Text>
                    Ceci est le contenu de la troisième carte.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
