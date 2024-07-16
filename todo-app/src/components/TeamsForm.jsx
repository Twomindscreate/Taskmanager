import React, { useState, useEffect } from "react"; // Include useEffect here

import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
const TeamsForm = ({ handleTeam, currentTeam }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentTeam) {
      setName(currentTeam.name);
      setDescription(currentTeam.description);
    } else {
      setName("");
      setDescription("");
    }
  }, [currentTeam]);

  const submitForm = () => {
    handleTeam({ name, description });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <FormGroup>
              <Label for="teamName">Team Name</Label>
              <Input
                type="text"
                id="teamName"
                placeholder="Enter team name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="teamDescription">Team Description</Label>
              <Input
                type="text"
                id="teamDescription"
                placeholder="Enter team description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>
            <Button color="primary" onClick={submitForm}>
              {currentTeam ? "Update Team" : "Add Team"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamsForm;
