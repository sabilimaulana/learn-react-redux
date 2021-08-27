import React from "react";
import TableComponent from "../../components/TableComponent";

function HomeContainer({ users }) {
  return (
    <>
      <TableComponent users={users} />
    </>
  );
}

export default HomeContainer;
