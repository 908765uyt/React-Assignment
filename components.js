import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const validationSchema = yup.object({
  // Validation schema as described in the question
});

function UserForm() {
  const formik = useFormik({
    initialValues: {
      // Initial values for form fields
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Form fields, including the PhoneInput */}
    </form>
  );
}

export default UserForm;
