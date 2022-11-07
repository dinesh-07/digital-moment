import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Authorization from "../Authorization";
import "./navstyle.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../contexts/User";
import CreatePost from "../PostForm/CreatePost"

function Navigation() {
  const [openAuth, setOpenAuth] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const { t } = useTranslation();
  const { toggleLang, user, setUser, toggleLoggedIn } = useContext(UserContext);

  const logout = () => {
    toggleLoggedIn();
    setUser(null);
  };

  return (
    <>
      <Authorization
        show={openAuth}
        setShow={setOpenAuth}
        openLogin={isLogin}
        setOpenLogin={setIsLogin}
      />
      <CreatePost 
        show={showCreatePost}
        setShow={setShowCreatePost}/>

      <Navbar
        collapseOnSelect
        expand="md"
        bg="light"
        variant="light"
        className="py-4 px-3 main-nav"
        fixed="top"
      
      >
        <Container className="mx-0 mw-100 flex-grow-1">
          <Navbar.Brand href="/" className="ms-3">
            <img
              alt="logo"
              src="https://digitalmoment.org/img/logo-DM-dark.png"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Offcanvas id="responsive-navbar-nav" placement="end">
            {user ? (
              <Offcanvas.Body>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>{`${t("greeting")}, ${
                    user.name
                  }!`}</Offcanvas.Title>
                </Offcanvas.Header>
                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                  <Nav.Link className="justify-content-center">
                    <Button
                      variant="primary"
                      className="rounded-0 nav-auth"
                      onClick={logout}
                    >
                      {t("nav.auth.logout")}
                    </Button>
                  </Nav.Link>
                  <Nav.Link>
                    <Button
                      variant="primary"
                      className="rounded-0"
                      onClick={toggleLang}
                    >
                      {t("lang")}
                    </Button>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            ) : (
              <>
                <Offcanvas.Header closeButton className="justify-content-end" />
                <Offcanvas.Body>
                  <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                    
                    <Nav.Link className="justify-content-center">
                      <Button
                        variant="primary"
                        className="rounded-0 nav-auth"
                        onClick={() => {
                          setOpenAuth(true);
                          setIsLogin(true);
                        }}
                      >
                        {t("nav.auth.login")}
                      </Button>
                    </Nav.Link>

                      
                    <Nav.Link>
                      <Button
                        variant="primary"
                        className="rounded-0 nav-auth"
                        onClick={() => {
                          setOpenAuth(true);
                          setIsLogin(false);
                        }}
                      >
                        {t("nav.auth.signup")}
                      </Button>
                    </Nav.Link>
                    <Nav.Link>
                      <Button
                        variant="primary"
                        className="rounded-0"
                        onClick={toggleLang}
                      >
                        {t("lang")}
                      </Button>
                    </Nav.Link>
                    <Nav.Link>
                      <Button
                        variant="primary"
                        className="rounded-0"
                        onClick={() => setShowCreatePost(true)}
                      >
                        +
                      </Button>
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </>
            )}
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
