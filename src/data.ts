import { DynamicFieldData } from "./dynamic-control-types";

export const fields: DynamicFieldData[] = [
    {
        fieldName: "name",
        inputType: "text",
        label: "Name",
        defaultValue: "",
        config: {
            required: "Required",
        },
    },
    {
        fieldName: "age",
        inputType: "number",
        label: "Age",
        defaultValue: 18,
        config: {
            required: "Required",
            validate: (value) => value >= 18 || "Still a minor",
        },
    },

    {
        fieldName: "ss",
        inputType: "checkbox",
        label: "Languagess",
        options: [
            { value: "english", label: "English" },
            { value: "french", label: "French" },
        ],
        defaultValue: "english",
    },
    {
        fieldName: "address",
        inputType: "text",
        label: "Address",
        defaultValue: "",
    },
    {
        label: "Gender",
        inputType: "radio", // hier wird der neue Wert "radio" für "inputType" verwendet
        fieldName: "gender",
        defaultValue: "",
        options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
        ],
        config: { required: true },
    },
];
