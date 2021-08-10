import { Button, Field, Header, Select, Typeahead } from "./index";

export default function Form({ formData }) {
  const inOrderData =
    formData instanceof Array
      ? formData.slice().sort((a, b) => a.order - b.order)
      : [];
  const buttons =
    formData instanceof Array
      ? formData.slice().filter((a) => a.tag === "button")
      : [];
  return (
    <div className="items-center flex justify-center min-h-screen flex-col mx-20 my-10">
      <h1 className="font-bold text-xl py-5">Multiple Forms</h1>
      <div className="w-full bg-white border-gray-200 border rounded-md divide-y divide-light-gray-300 px-8">
        {inOrderData.map((el) => {
          if (el.tag === "field") {
            return (
              <Field
                key={el.order}
                name={el.description}
                type={el.type ? el.type : "text"}
                rules={el.rules}
                range={el.range}
                elementName={el.elementName}
              />
            );
          } else if (el.tag === "header") {
            return <Header text={el.description} key={el.order} />;
          } else if (el.tag === "select") {
            return (
              <Select
                name={el.description}
                list={el.list}
                key={el.order}
                elementName={el.elementName}
              />
            );
          } else if (el.tag === "typeahead") {
            return (
              <Typeahead
                key={el.order}
                elementName={el.elementName}
                name={el.description}
              />
            );
          }
          return null;
        })}
        <div className="flex justify-end py-5">
          {buttons.map((el) => (
            <Button
              key={el.order}
              text={el.description}
              className="m-2"
              action={el.action}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
