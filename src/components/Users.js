import React from "react";
import { ListGroup } from "react-bootstrap";

export default function Users() {
  return (
    < div class="alert alert-danger ml-5" >
    <ListGroup horizontal>
      <ListGroup.Item>This</ListGroup.Item>
      <ListGroup.Item>ListGroup</ListGroup.Item>
      <ListGroup.Item>renders</ListGroup.Item>
      <ListGroup.Item>horizontally!</ListGroup.Item>
    </ListGroup><br />

    <ListGroup >
      <ListGroup.Item>This</ListGroup.Item>
      <ListGroup.Item>ListGroup</ListGroup.Item>
      <ListGroup.Item>renders</ListGroup.Item>
      <ListGroup.Item>vertically!</ListGroup.Item>
    </ListGroup>
    </div>
  );
}
