import React from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { postUserCreate } from "../../actions/userAction";
import BackComponent from "../../components/BackComponent";
import FormComponent from "../../components/FormComponent";

function CreateUserContainer({ dispatch }) {
  const handleSubmit = (data) => {
    dispatch(postUserCreate(data));
  };

  return (
    <Container>
      <BackComponent />
      <h1>Create user</h1>
      <FormComponent onSubmit={(data) => handleSubmit(data)} />
    </Container>
  );
}

export default connect()(CreateUserContainer);
