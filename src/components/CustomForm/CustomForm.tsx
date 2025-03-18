import { zodResolver } from "@hookform/resolvers/zod";
import {SubmitHandler, useForm} from 'react-hook-form';
import InputForm from './components/CustomInput';
import "./CostumForm.css"
import { formValue, schema } from "./models";

const CustomForm = () => {
    
   const {control, handleSubmit, formState:{errors}} = useForm<formValue>({
    resolver: zodResolver(schema),
   });

   const onSubmit: SubmitHandler<formValue> = (data) => {
    console.log(data)
   }
   return(
    <form  onSubmit={handleSubmit(onSubmit)}>
        <InputForm 
            name="name" 
            control ={control}
            label="Name"
            type="text" 
            error={errors.name}
        />
        <InputForm 
            name="email" 
            control={control}
            label="Email"
            type="email" 
            error={errors.email}
        />
        <InputForm 
            name="password" 
            control={control}
            label="Password"
            type="password" 
            error={errors.password}
        />
        <InputForm 
            name="confirmPass" 
            control={control}
            label="ConfirmPass"
            type="password" 
            error={errors.confirmPass}
        />
        <button type="submit">Submit</button>
    </form>
)
}
export default CustomForm;