import React from "react";
import { connect } from "react-redux";
import { Col, FormGroup, Input, Label, Row, Button } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { UserValidation } from "../../validations/UserValidation";

function mapStateToProps(state) {
  return {
    initialValues: {
      nama: state.users.getUserDetail.nama,
      alamat: state.users.getUserDetail.alamat,
    },
  };
}

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>

    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      />
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

let FormComponent = ({ submitting, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup row>
        <Col md={6}>
          <Field
            type="text"
            name="nama"
            component={renderField}
            label="Nama :"
          />
        </Col>
        <Col md={6}>
          <Field
            type="text"
            name="alamat"
            component={renderField}
            label="Alamat :"
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col md={12}>
          <FormGroup>
            <Button
              className="mt-2"
              color="dark"
              type="submit"
              disabled={submitting}
            >
              Submit
            </Button>
          </FormGroup>
        </Col>
      </FormGroup>
    </form>
  );
};

FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect(mapStateToProps, null)(FormComponent);
