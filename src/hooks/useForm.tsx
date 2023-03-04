import {useState} from 'react';

type TUseFormProps = {
  email: string,
  name: string,
  password: string,
  token?: string
}
export function useForm(inputValues: TUseFormProps) {
    const [values, setValues] = useState(inputValues);
  
    const handleChange = (event: { target: { value: string; name: string;} }) => {
      const {value, name} = event.target;
      setValues({...values, [name]: value});
    };
    return {values, handleChange, setValues};
}
