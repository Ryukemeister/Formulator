export const formDataFields = {
  form: {
    sections: [
      {
        order: 1,
        section_title: "Welcome!",
        section_subtitle: "Join our newsletter",
        fields: [
          {
            name: "name",
            label: "Name",
            required: true,
            data_type: "Integer",
            html_element: "textbox",
          },
          {
            name: "email",
            label: "Email",
            hidden: false,
            required: true,
            data_type: "String",
            html_element: "email",
          },
          {
            name: "phone",
            label: "Phone",
            required: true,
            data_type: "number",
            html_element: "number",
          },
          {
            name: "age",
            label: "Age",
            hidden: false,
            options: [],
            required: true,
            data_type: "number",
            html_element: "number",
          },
          {
            name: "photo",
            label: "Photo",
            hidden: false,
            options: [],
            required: true,
            data_type: "Image",
            html_element: "file",
          },
        ],
      },
    ],
  },
};
