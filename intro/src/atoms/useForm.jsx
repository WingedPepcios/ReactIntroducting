import React, { useState, useCallback } from 'react';

const useForm = ({ endpoint, method }) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const onSubmit = useCallback(
    (e) => {
      event.preventDefault();
      setIsSubmiting(true);
    },
    [],
  );
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      
    </form>
  );
};

export default useForm;
