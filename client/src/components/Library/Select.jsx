import { useUpdateStore } from "../context/formContext";

export default function Select({ name, list = [] }) {
  const updateStore = useUpdateStore();
  return (
    <div className="py-5 grid grid-cols-3">
      <label className="block text-sm font-medium text-gray-700">{name}</label>
      <select
        onChange={(e) => updateStore(e.target.value, name)}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {list.length > 0 && list.map((el, i) => <option key={i}>{el}</option>)}
      </select>
    </div>
  );
}
