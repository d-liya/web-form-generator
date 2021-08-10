import { useStore, useUpdateStore } from "../../context/formContext";
import Form from "react-bootstrap/Form";
import { SelectGroupType, SelectType } from "../../types";
import { Label } from "../Field/Field";

export const Select = ({ name, list = [], elementName, ...props }) => {
  const updateStore = useUpdateStore();
  const store = useStore();
  const _elementName = `${elementName}-${store.currentForm}`;
  return (
    // <Form.Group controlId={_elementName}>
    //   <Form.Label>{name}</Form.Label>
    //   <Form.Select
    //     onChange={(e) => updateStore(e.target.value, name)}
    //     value={store[_elementName]}
    //   >
    //     {list.length > 0 && list.map((el, i) => <option key={i}>{el}</option>)}
    //   </Form.Select>
    // </Form.Group>
    Group(
      props,
      { text: name },
      {
        onChange: (e) => updateStore(e.target.value, name),
        value: store[_elementName],
      }
    )
  );
};

const _Select: SelectType = (selectProps, list) => (
  <Form.Select {...selectProps}>
    {list.length > 0 &&
      list.map((el: string, i: number) => <option key={i}>{el}</option>)}
  </Form.Select>
);

const Group: SelectGroupType = (groupProps, labelProps, selectProps) => (
  <Form.Group {...groupProps}>
    {Label(labelProps.text, labelProps)}
    {_Select(selectProps)}
  </Form.Group>
);
