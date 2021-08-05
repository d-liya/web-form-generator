const formOneData = [
  {
    order: 1,
    elementName: "Profile",
    tag: "header",
  },
  {
    order: 2,
    elementName: "First Name",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 3,
    elementName: "Last Name",
    tag: "field",
  },
  {
    order: 4,
    elementName: "Date Of Birth",
    tag: "field",
    type: "Date",
    rules: ["dofValidator"],
  },
  {
    order: 5,
    elementName: "Age",
    tag: "field",
    type: "number",
    range: [0, null],
  },
  {
    order: 6,
    elementName: "Cancel",
    tag: "button",
    action: "cancel",
  },
  {
    order: 7,
    elementName: "Next",
    tag: "button",
    action: "nextForm",
  },
];

exports.formOneData = formOneData;

const formTwoData = [
  {
    order: 1,
    elementName: "Profile",
    tag: "header",
  },
  {
    order: 2,
    elementName: "First Name",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 3,
    elementName: "Last Name",
    tag: "field",
  },
  {
    order: 4,
    elementName: "Date Of Birth",
    tag: "field",
    type: "Date",
    rules: ["dofValidator"],
  },
  {
    order: 5,
    elementName: "Age",
    tag: "field",
    type: "number",
    range: [0, null],
  },
  {
    order: 6,
    elementName: "Address",
    tag: "header",
  },
  {
    order: 7,
    elementName: "Street Address",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 8,
    elementName: "City",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 9,
    elementName: "State",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 10,
    elementName: "ZipCode",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 12,
    elementName: "Country",
    tag: "select",
    list: ["Canada", "United States"],
  },
  {
    order: 13,
    elementName: "Cancel",
    tag: "button",
    action: "cancel",
  },
  {
    order: 14,
    elementName: "Save",
    tag: "button",
    action: "submit",
  },
];
exports.formTwoData = formTwoData;

const formOnePartB = [
  {
    order: 6,
    elementName: "Address",
    tag: "header",
  },
  {
    order: 7,
    elementName: "Street Address",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 8,
    elementName: "City",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 9,
    elementName: "State",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 10,
    elementName: "ZipCode",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 12,
    elementName: "Country",
    tag: "select",
    list: ["Canada", "United States"],
  },
  {
    order: 13,
    elementName: "Back",
    tag: "button",
    action: "back",
  },
  {
    order: 14,
    elementName: "Save",
    tag: "button",
    action: "submit",
  },
];
exports.formOnePartB = formOnePartB;
