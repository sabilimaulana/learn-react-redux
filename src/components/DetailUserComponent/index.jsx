import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

function mapStateToProps(state) {
  return { user: state.users.getUserDetail };
}

function DetailUserComponent({ user }) {
  return (
    <div>
      <Table variant="dark" striped hover>
        <tbody>
          <tr>
            <td width="200">Name</td>
            <td width="10">:</td>
            <td>{user.nama}</td>
          </tr>
          <tr>
            <td width="200">Alamat</td>
            <td width="10">:</td>
            <td>{user.alamat}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default connect(mapStateToProps, null)(DetailUserComponent);
