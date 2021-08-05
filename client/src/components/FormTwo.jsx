import Field from "./Library/Field";
import Header from "./Library/Header";

export default function FormTwo() {
  return (
    <div className="items-center flex justify-center min-h-screen flex-col mx-20 my-10">
      <h1 className="font-bold text-xl py-5">Form With Multiple Sections</h1>
      <div className="w-full bg-white border-gray-200 border rounded-md divide-y divide-light-gray-300 px-8">
        <Header text="Profile" />
        <Field name="First Name" />
        <Field name="Last Name" />
        <Field name="Birth Date" />
        <Field name="Age" type="number" />
        <Header text="Profile" />
        <Field name="First Name" />
        <Field name="Last Name" />
        <Field name="Birth Date" />
        <Field name="Age" />
      </div>
    </div>
  );
}
