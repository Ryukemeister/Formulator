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
        className="flex flex-col rounded-sm justify-center lg:py-8 lg:px-14 drop-shadow-xl bg-blue-50"
      >
        {formDataFields.form.sections.map((dataField) => {
          return (
            <div className="flex flex-col" key={dataField.order}>
              <h1 className="text-center text-red-400 lg:text-3xl font-hind font-bold">
                {dataField.section_title}
              </h1>
              <h1 className="text-center lg:text-xl font-hind text-black font-bold">
                {dataField.section_subtitle.toLocaleUpperCase()}
              </h1>
              {dataField.fields.map((field) => {
                return (
                  <div className="flex flex-col mb-2" key={field.name}>
                    <label className="font-poppins font-normal mb-1 mx-5 lg:mx-10">
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
          className="text-white font-semibold font-poppins tracking-wider mt-2 lg:mt-4 bg-red-400 py-2"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default BasicInformationForm;
