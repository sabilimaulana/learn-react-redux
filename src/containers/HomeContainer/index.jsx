import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getUsersList } from "../../actions/userAction";
import TableComponent from "../../components/TableComponent";

function HomeContainer({ dispatch }) {
  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  return (
    <>
      <TableComponent />
    </>
  );
}

export default connect()(HomeContainer);
