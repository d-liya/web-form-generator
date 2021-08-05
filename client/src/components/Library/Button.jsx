import { useFunction } from "../../hooks/useFunction";

export default function Button({ text, variant, onClick, action }) {
  const handler = useFunction(action);
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    } else if (handler) {
      handler();
    }
  };
  return (
    <button
      onClick={handleOnClick}
      type="submit"
      className={`inline-flex justify-center m-2 py-2 px-4 border  
      shadow-sm text-sm font-medium rounded-md text-${
        !variant ? "white" : "black"
      } bg-${!variant ? "indigo-600" : "white"} hover:bg-${
        !variant ? "indigo-700" : "gray-300"
      }
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 `}
    >
      {text}
    </button>
  );
}
