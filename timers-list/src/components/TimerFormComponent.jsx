import React from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Label,
  Input,
  Row,
  Col,
  Container,
  FormFeedback,
  FormGroup,
} from "reactstrap";
import {
  required,
  minValue,
  validTime,
  validName,
  composeValidators,
} from "../shared/validators";
import { useDispatch } from "react-redux";
import { addTimer, closeTimerModal, editTimer } from "../redux/actions";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { formatTimeExtended } from "../shared/utils";
import { CustomModal } from "./CustomModalComponent";

export default function TimerForm(props) {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    if (!validTime(values)) {
      return { [FORM_ERROR]: "Duration must be greater than 0 seconds." };
    } else {
      if (props.isCreationModal) {
        dispatch(addTimer(values));
      } else {
        dispatch(editTimer({ ...values, index: props.updatingTimerIndex }));
      }
      dispatch(closeTimerModal());
    }
  };

  return (
    <>
      <CustomModal
        modalHeader={
          props.isCreationModal
            ? "Add a new timer"
            : `Edit timer: ${props.updatingTimer.name}`
        }
        modalBody={
          <Container>
            <Form
              onSubmit={onSubmit}
              initialValues={
                props.isCreationModal
                  ? { hours: 0, minutes: 0, seconds: 0 }
                  : {
                      ...props.updatingTimer,
                      ...formatTimeExtended(props.updatingTimer.seconds),
                    }
              }
              render={({ submitError, handleSubmit }) => (
                <form onSubmit={handleSubmit} id="timer-form">
                  <FormGroup row>
                    <Field
                      name="name"
                      validate={composeValidators(required, validName)}
                    >
                      {({ input, meta }) => (
                        <>
                          <Label for="name" sm={2}>
                            Name
                          </Label>
                          <Col sm={10}>
                            <Input
                              name={input.name}
                              value={input.value}
                              onChange={input.onChange}
                              required
                              id="name"
                              placeholder="Name of the timer"
                              autoFocus
                              invalid={meta.error && meta.touched}
                              onBlur={(event) => input.onBlur(event)}
                            />
                            <FormFeedback>{meta.error}</FormFeedback>
                          </Col>
                        </>
                      )}
                    </Field>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={2}>Duration</Label>
                    <Col sm={10}>
                      <Row>
                        <Col xs={3}>
                          <Field
                            name="hours"
                            validate={composeValidators(required, minValue(0))}
                          >
                            {({ input, meta }) => (
                              <>
                                <Input
                                  name={input.name}
                                  value={input.value}
                                  onChange={input.onChange}
                                  required
                                  id="hours"
                                  invalid={meta.error && meta.touched}
                                  onBlur={(event) => input.onBlur(event)}
                                />
                                <Label for="name" sm={2}>
                                  Hrs
                                </Label>
                                <FormFeedback>{meta.error}</FormFeedback>
                              </>
                            )}
                          </Field>
                        </Col>
                        <Col xs={1}>:</Col>
                        <Col xs={3}>
                          <Field
                            name="minutes"
                            validate={composeValidators(required, minValue(0))}
                          >
                            {({ input, meta }) => (
                              <>
                                <Input
                                  name={input.name}
                                  value={input.value}
                                  onChange={input.onChange}
                                  required
                                  id="minutes"
                                  invalid={meta.error && meta.touched}
                                  onBlur={(event) => input.onBlur(event)}
                                />
                                <Label for="name" sm={2}>
                                  Mins
                                </Label>
                                <FormFeedback>{meta.error}</FormFeedback>
                              </>
                            )}
                          </Field>
                        </Col>
                        <Col xs={1}>:</Col>
                        <Col xs={3}>
                          <Field
                            name="seconds"
                            validate={composeValidators(required, minValue(0))}
                          >
                            {({ input, meta }) => (
                              <>
                                <Input
                                  name={input.name}
                                  value={input.value}
                                  onChange={input.onChange}
                                  required
                                  id="seconds"
                                  invalid={meta.error && meta.touched}
                                  onBlur={(event) => input.onBlur(event)}
                                />
                                <Label for="name" sm={2}>
                                  Secs
                                </Label>
                                <FormFeedback>{meta.error}</FormFeedback>
                              </>
                            )}
                          </Field>
                        </Col>
                      </Row>
                      {submitError && (
                        <p class="small text-danger">{submitError}</p>
                      )}
                    </Col>
                  </FormGroup>
                </form>
              )}
            />
          </Container>
        }
        modalFooter={
          <div className="row">
            <Button type="submit" form="timer-form">
              Submit
            </Button>
          </div>
        }
      />
    </>
  );
}
