import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";

const JumbotronComponent = (props) => {
  return (
    <div>
      <Container>
        <Jumbotron>
          <h1 className="display-3">Sabili Maulana</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="dark">
              <FontAwesomeIcon icon={faInfo} /> Learn More
            </Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default JumbotronComponent;
