import { Control, Controller, FieldError} from "react-hook-form";
import { formValue } from "../models";

interface Props{
    name:keyof formValue;
    control:Control<formValue>;
    label:string;
    type?:string;
    error?:FieldError;
}

const InputForm = ({name,control,label,type,error}:Props) =>{
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Controller 
                name={name} 
                control={control} 
                render={({field}) => 
                    <input 
                        id={name} 
                        type={type} {...field} 
                        className={`form-control ${error? "is-invalid" :""}`}
                    />
                }
            />
            {error && <p className="error">{error.message}</p>}
        </div>
    )
}
export default InputForm;