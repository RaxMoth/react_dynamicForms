import { DynamicFieldData } from "./dynamic-control-types";

export const fields2: DynamicFieldData[] = [
    {
        fieldName: "test",
        inputType: "text",
        label: "test",
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
];
