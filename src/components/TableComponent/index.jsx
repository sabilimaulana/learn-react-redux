import {
  faEdit,
  faInfo,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Col, Container, Row } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

const { SearchBar } = Search;
const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "nama",
    text: "Nama",
    sort: true,
  },
  {
    dataField: "alamat",
    text: "Alamat",
    sort: true,
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={`/detail/${row.id}`}>
            <Button color="dark" className="me-2">
              <FontAwesomeIcon icon={faInfo} /> Detail
            </Button>
          </Link>

          <Link to={`/edit/${row.id}`}>
            <Button color="dark" className="me-2">
              <FontAwesomeIcon icon={faEdit} /> Edit
            </Button>
          </Link>

          <Button color="dark" className="me-2">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id", // if dataField is not match to any column you defined, it will be ignored.
    order: "asc", // desc or asc
  },
];

const TableComponent = ({ users }) => {
  return (
    <Container>
      <ToolkitProvider
        keyField="id"
        data={users}
        columns={columns}
        defaultSorted={defaultSorted}
        search
      >
        {(props) => (
          <div>
            <Row>
              <Col>
                <Link to="/create">
                  <Button color="dark">
                    <FontAwesomeIcon icon={faUserPlus} /> Create User
                  </Button>
                </Link>
              </Col>
              <Col>
                <div className="float-end mb-2">
                  <SearchBar placeholder="Search ..." {...props.searchProps} />
                </div>
              </Col>
            </Row>

            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory()}
            />
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
};

export default TableComponent;
