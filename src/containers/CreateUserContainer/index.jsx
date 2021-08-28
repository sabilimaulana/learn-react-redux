import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import swal from "sweetalert";
import { deleteCreatedUser, postUserCreate } from "../../actions/userAction";
import BackComponent from "../../components/BackComponent";
import FormComponent from "../../components/FormComponent";

const mapStateToProps = (state) => {
  return {
    createdUser: state.users.getResponseDataUser,
    errorCreatedUser: state.users.errorResponseDataUser,
  };
};

function CreateUserContainer({ dispatch, createdUser, errorCreatedUser }) {
  const handleSubmit = (data) => {
    dispatch(postUserCreate(data));
  };

  if (createdUser || errorCreatedUser) {
    if (errorCreatedUser) {
      swal("Create user failed!", errorCreatedUser, "error");
    } else {
      swal(
        "User Created!",
        `Nama : ${createdUser.nama}, Alamat : ${createdUser.alamat}`,
        "success"
      );
    }
  }

  useEffect(() => {
    return () => {
      dispatch(deleteCreatedUser());
    };
  }, [dispatch]);

  return (
    <Container>
      <BackComponent />
      <h1>Create user</h1>
      <FormComponent onSubmit={(data) => handleSubmit(data)} />
    </Container>
  );
}

export default connect(mapStateToProps, null)(CreateUserContainer);
