import React from "react";
import { formDataFields } from "./formData";

function BasicInformationForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[320px] lg:w-auto rounded-sm justify-center py-4 lg:py-8 lg:px-14 drop-shadow-xl bg-blue-50"
      >
        {formDataFields.form.sections.map((dataField) => {
          return (
            <div className="flex flex-col mx-8 lg:mx-0" key={dataField.order}>
              <h1 className="text-center text-red-400 text-3xl font-hind font-bold">
                {dataField.section_title}
              </h1>
              <h1 className="text-center text-xl font-hind text-black font-bold">
                {dataField.section_subtitle.toLocaleUpperCase()}
              </h1>
              {dataField.fields.map((field) => {
                return (
                  <div className="flex flex-col mb-2 my-1" key={field.name}>
                    <label className="font-poppins font-normal mb-1 lg:mx-1">
                      {field.label}
                    </label>
                    <input
                      className="border-[1.5px] lg:px-2 py-1 font-poppins rounded-sm border-white outline-none"
                      type={field.html_element ? field.html_element : "text"}
                      name={field.name}
                      datatype={field.data_type}
                      required={field.required}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
        <button
          type="submit"
          className="text-white font-semibold font-poppins tracking-wider mt-2 mx-8 lg:mx-0 lg:mt-4 bg-red-400 py-2"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default BasicInformationForm;
