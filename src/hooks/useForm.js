import { useState } from 'react';
import { helpHTTP } from '../helpers/helpHTTP';

export const useForm = (initialForm = {}) => {
  const [form, setForm] = useState(null);
  const [loader, setLoader] = useState(null);
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const postForm = async (e) => {
    try {
      e.preventDefault();
      setLoader(true);
      const response = await helpHTTP().post(
        'https://formsubmit.co/ajax/44a6dcb468c30c721454b60898bbb241',
        {
          body: formState
        }
      );
      if (JSON.stringify(response).includes('Error')) throw response;
      setForm(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  return { form, postForm, loader, formState, onInputChange };
};
