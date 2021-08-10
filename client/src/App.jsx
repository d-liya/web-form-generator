import { Button } from "./components";
import Form from "./components/Form";
import { useFormChange, useStore, useUpdateStore } from "./context/formContext";
export const server_url = "http://localhost:3001/";
function App() {
  const state = useStore();
  const updateStore = useUpdateStore();
  const { addForm } = useFormChange();
  const onClick = (formType) => {
    updateStore([], "formIDs");
    fetch(server_url + formType)
      .then((res) => res.json())
      .then((res) => {
        updateStore(res.data, res.id);
        updateStore(res.id, "currentForm");
        updateStore(true, "UIstate");
        addForm(res.id);
      })
      .catch((er) => alert(er));
  };
  return !state.UIstate ? (
    <div className="items-center flex justify-center min-h-screen flex-col mx-20 my-10">
      <div className="">
        <Button text="Multiple Form" onClick={() => onClick("formOne")} />
        <Button text="Single Forms" onClick={() => onClick("formTwo")} />
      </div>
    </div>
  ) : (
    <Form formData={state[state.currentForm]} />
  );
}

export default App;
