import { server_url } from "../App";
import {
  useFormChange,
  useResetState,
  useStore,
  useUpdateStore,
} from "../components/context/formContext";

const notEmpty = (value) => {
  if (!value) return "This field cannot be empty";
};
const dofValidator = (value) => {
  if (new Date(value).getTime() > Date.now()) return "Date Of Birth is invalid";
};

let functions = {
  notEmpty,
  dofValidator,
};
export const useFunction = (name) => {
  const store = useStore();
  const resetState = useResetState();
  const { addForm, goBackForm } = useFormChange();
  const updateStore = useUpdateStore();
  const cancel = () => {
    resetState();
  };
  const submit = () => {
    const id = store.currentForm;
    fetch(server_url + "submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((res) => {
        resetState();
        alert(res.message);
      })
      .catch((err) => alert(err));
  };
  const nextForm = () => {
    fetch(server_url + "formOnePartB")
      .then((res) => res.json())
      .then((res) => {
        updateStore(res.data, res.id);
        updateStore(res.id, "currentForm");
        updateStore(true, "UIstate");
        addForm(res.id);
      })
      .catch((er) => alert(er));
  };
  const back = () => {
    console.log(goBackForm());
  };
  functions = { ...functions, cancel, submit, nextForm, back };
  if (name instanceof Array) {
    if (name.length > 0) {
      return (value) => {
        let errorMesages = "";
        name.forEach((fName) => {
          if (functions[fName]) {
            const errorMesage = functions[fName](value);
            if (errorMesage) {
              errorMesages += errorMesage + ";";
            }
          }
        });
        return errorMesages;
      };
    }
  }
  return functions[name];
};
