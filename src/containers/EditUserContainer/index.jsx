import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import swal from "sweetalert";
import {
  deleteCreatedUser,
  deleteUserDetail,
  getUserDetail,
  putUserUpdate,
} from "../../actions/userAction";
import BackComponent from "../../components/BackComponent";
import FormComponent from "../../components/FormComponent";

const mapStateToProps = (state) => {
  return {
    createdUser: state.users.getResponseDataUser,
    errorCreatedUser: state.users.errorResponseDataUser,
  };
};

function EditUserContainer({ dispatch, createdUser, errorCreatedUser }) {
  const { id } = useParams();

  if (createdUser || errorCreatedUser) {
    if (errorCreatedUser) {
      swal("Update user failed!", errorCreatedUser, "error");
    } else {
      swal(
        "User Updated!",
        `Nama : ${createdUser.nama}, Alamat : ${createdUser.alamat}`,
        "success"
      );
    }
  }

  useEffect(() => {
    dispatch(getUserDetail(id));

    return () => {
      dispatch(deleteUserDetail());
      dispatch(deleteCreatedUser());
    };
  }, [dispatch, id]);

  const handleSubmit = (data) => {
    dispatch(putUserUpdate(data, id));
  };

  return (
    <Container>
      <BackComponent />
      <h1>Edit user</h1>
      <FormComponent onSubmit={(data) => handleSubmit(data)} />
    </Container>
  );
}

export default connect(mapStateToProps, null)(EditUserContainer);
