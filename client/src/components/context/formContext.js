import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
const initialState = {
  UIstate: false,
  formIDs: [],
  currentForm: "",
};
const formReducer = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    resetState: () => {
      return initialState;
    },
  },
});

export const { updateValue, resetState } = formReducer.actions;

export const store = configureStore({
  reducer: formReducer.reducer,
});

export const useUpdateStore = () => {
  const dispatch = useDispatch();

  return (value, name) => dispatch(updateValue({ value, name }));
};
export const useResetState = () => {
  const dispatch = useDispatch();
  return () => dispatch(resetState());
};
export const useStore = () => {
  const state = useSelector((state) => state);
  return state;
};

export const useFormChange = () => {
  const state = useSelector((state) => state);
  const updateValue = useUpdateStore();
  const addForm = (id) => {
    if (!state.formIDs.includes(id))
      updateValue([...state.formIDs, id], "formIDs");
  };
  const goBackForm = () => {
    const index = new Array(...state.formIDs).indexOf(state.currentForm);
    if (index > 0) {
      updateValue(state.formIDs[index - 1], "currentForm");
      return true;
    }
    return false;
  };
  const goForward = () => {
    const index = new Array(state.formIDs).indexOf(state.currentForm);
    if (index + 1 < state.formIDs.length) {
      updateValue(state.formIDs[index + 1], "currentForm");
      return true;
    }
    return false;
  };
  const reset = () => {
    updateValue(false, "UIstate");
    updateValue([], "formIDs");
    updateValue("", "currentForm");
  };
  return { addForm, goBackForm, goForward, reset };
};
