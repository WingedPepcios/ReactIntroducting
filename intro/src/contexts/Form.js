import React, { useState, useCallback } from 'react';



export const FormContext = React.createContext();




export const Form = ({ children, onSubmit }) => {
  const [formValues, setFormValues] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setInputValue = useCallback(
    (name, value) => {
      if (name === '' || name === undefined) {
        throw Error('Input name is required!');
      }
  
      setFormValues(
        (state) => (
          {
            ...state,
            [name]: value,
          }
        )
      );
    },
    [setFormValues],
  );

  const defaultSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    await onSubmit(formValues);

    setIsSubmitting(false);
  }

  return (
    <FormContext.Provider value={{ ...formValues, setInputValue, isSubmitting }}>
      <form onSubmit={(e) => defaultSubmit(e)}>
        {children}
      </form>
    </FormContext.Provider>
  )
};
