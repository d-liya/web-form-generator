import { useState } from "react";
import { Typeahead as DefaultTypeahead } from "react-bootstrap-typeahead";
import Form from "react-bootstrap/Form";
import { useStore } from "react-redux";
import { useUpdateStore } from "../../context/formContext";
export const Typeahead = ({ elementName, name }) => {
  const store = useStore();
  const [error, set] = useState("");
  const updateStore = useUpdateStore();
  const _elementName = `${elementName}-${store.currentForm}`;

  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <DefaultTypeahead
        id={_elementName}
        onChange={(selected) => {
          updateStore(selected, _elementName);
        }}
        options={["IL", "II", "IK", "JJ", "JL"]}
      />
    </Form.Group>
  );
};
