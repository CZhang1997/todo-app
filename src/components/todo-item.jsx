import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import moment from "moment";
import TodoDataServices from "../services/TodoDataServices";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      description: "",
      targetDate: "",
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.validateHandler = this.validateHandler.bind(this);
  }
  componentDidMount() {
    const { id } = this.state;

    id != 0 &&
      TodoDataServices.getItemById(this.props.match.params.id).then((res) => {
        //   console.log(res);
        const {
          data: { id, description, targetDate },
        } = res;
        //   console.log(moment(targetDate).format("YYYY-MM-DD"));
        this.setState({
          id,
          description,
          targetDate: moment(new Date(targetDate)).format("YYYY-MM-DD"),
        });
      });
  }

  onSubmitHandler = (value) => {
    console.log(value);
    const { description, targetDate } = value;
    const { id } = this.state;
    TodoDataServices.updateItemById(id, {
      id,
      description,
      targetDate,
    }).then((res) => {
      console.log(res);
      this.props.history.push("/home");
    });
  };

  validateHandler = (value) => {
    let errors = {};
    const { description, targetDate } = value;
    if (!description) {
      errors.description = "Enter a Description";
    }
    return errors;
  };
  render() {
    const { description, targetDate } = this.state;
    return (
      <div className="">
        <h1>Todo</h1>
        <div className="container">
          <Formik
            initialValues={{ description, targetDate }}
            onSubmit={this.onSubmitHandler}
            validate={this.validateHandler}
            enableReinitialize
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    id="description"
                    name="description"
                  ></Field>
                </fieldset>
                <fieldset className="form-group">
                  <label>Target Date</label>
                  <Field
                    className="form-control"
                    type="date"
                    id="targetDate"
                    name="targetDate"
                  ></Field>
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default TodoItem;
