import { useState } from "react";
import { useStore, useUpdateStore } from "../context/formContext";
import { useFunction } from "./../../hooks/useFunction";
export default function Field({ name, value, type, rules, range }) {
  const validator = useFunction(rules);
  const store = useStore();
  const [error, set] = useState("");
  const updateStore = useUpdateStore();
  const elementName = `${name}-${store.currentForm}`;
  const handleBlur = (e) => {
    set("");
    if (validator) {
      const errorMessage = validator(e.target.value);
      if (errorMessage) {
        set(errorMessage);
        return updateStore("", elementName);
      }
    }
    updateStore(e.target.value, elementName);
  };
  const handleOnChange = (e) => {
    if (range instanceof Array && range.length > 0) {
      if (range[0] != null && range[0] > parseInt(e.target.value)) return;
      if (range[1] != null && range[1] < parseInt(e.target.value)) return;
    }
    updateStore(e.target.value, elementName);
  };
  return (
    <div className="py-5 grid grid-cols-3">
      <label className="block text-sm font-medium text-gray-700 col-span-1">
        {name}
        <div className="text-xs font-bold text-red-300">{error}</div>
      </label>
      <input
        value={store[elementName]}
        onChange={handleOnChange}
        onBlur={handleBlur}
        type={type}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border sm:text-sm border-gray-200 rounded-md p-2 col-span-1"
      />
    </div>
  );
}
