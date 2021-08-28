import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { deleteUserDetail, getUserDetail } from "../../actions/userAction";
import BackComponent from "../../components/BackComponent";
import DetailUserComponent from "../../components/DetailUserComponent";

function DetailUserContainer({ dispatch }) {
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(getUserDetail(id));

    return () => dispatch(deleteUserDetail());
  }, [dispatch, id]);

  return (
    <Container>
      <BackComponent />
      <h1>Detail user {id}</h1>
      <DetailUserComponent />
    </Container>
  );
}

export default connect()(DetailUserContainer);
