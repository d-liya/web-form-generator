const formOneData = [
  {
    order: 1,
    description: "Profile",
    tag: "header",
  },
  {
    order: 2,
    elementName: "first-name",
    description: "First Name",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 3,
    elementName: "last-name",
    description: "Last Name",
    tag: "field",
  },
  {
    order: 4,
    elementName: "dob",
    description: "Date Of Birth",
    tag: "field",
    type: "Date",
    rules: ["dofValidator"],
  },
  {
    order: 5,
    elementName: "age",
    description: "Age",
    tag: "field",
    type: "number",
    range: [0, null],
  },
  {
    order: 7,
    description: "Cancel",
    tag: "button",
    action: "cancel",
  },
  {
    order: 8,
    description: "Next",
    tag: "button",
    action: "nextForm",
  },
];

exports.formOneData = formOneData;

const formTwoData = [
  {
    order: 1,
    description: "Profile",
    tag: "header",
  },
  {
    order: 2,
    elementName: "first-name",
    description: "First Name",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 3,
    elementName: "Last Name",
    description: "last-name",
    tag: "field",
  },
  {
    order: 4,
    elementName: "Date Of Birth",
    description: "dob",
    tag: "field",
    type: "Date",
    rules: ["dofValidator"],
  },
  {
    order: 5,
    elementName: "age",
    description: "Age",
    tag: "field",
    type: "number",
    range: [0, null],
  },
  {
    order: 6,
    description: "Address",
    tag: "header",
  },
  {
    order: 7,
    elementName: "street-address",
    description: "Street Address",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 8,
    description: "city",
    elementName: "City",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 9,
    description: "state",
    elementName: "State",
    tag: "typeahead",
    rules: ["notEmpty"],
  },
  {
    order: 10,
    description: "ZipCode",
    elementName: "zip-code",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 12,
    description: "Country",
    elementName: "country",
    tag: "select",
    list: ["Canada", "United States"],
  },
  {
    order: 13,
    description: "Cancel",
    tag: "button",
    action: "cancel",
  },
  {
    order: 14,
    description: "Save",
    tag: "button",
    action: "submit",
  },
];
exports.formTwoData = formTwoData;

const formOnePartB = [
  {
    order: 6,
    description: "Address",
    tag: "header",
  },
  {
    order: 7,
    elementName: "street-address",
    description: "Street Address",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 8,
    description: "city",
    elementName: "City",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 9,
    description: "state",
    elementName: "State",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 10,
    description: "ZipCode",
    elementName: "zip-code",
    tag: "field",
    rules: ["notEmpty"],
  },
  {
    order: 12,
    description: "Country",
    elementName: "country",
    tag: "select",
    list: ["Canada", "United States"],
  },
  {
    order: 13,
    description: "Back",
    tag: "button",
    action: "back",
  },
  {
    order: 14,
    description: "Save",
    tag: "button",
    action: "submit",
  },
];
exports.formOnePartB = formOnePartB;
