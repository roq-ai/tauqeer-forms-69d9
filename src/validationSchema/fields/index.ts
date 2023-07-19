import * as yup from 'yup';

export const fieldValidationSchema = yup.object().shape({
  name: yup.string().required(),
  form_id: yup.string().nullable().required(),
});
