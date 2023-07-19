import * as yup from 'yup';

export const responseValidationSchema = yup.object().shape({
  content: yup.string().required(),
  user_id: yup.string().nullable().required(),
  form_id: yup.string().nullable().required(),
});
