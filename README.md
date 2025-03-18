React Form with Validation Project
This project is a React application that uses react-hook-form and zod for efficient form management and validation. The form includes fields like name, email, password, and confirm password, with validations applied to each one.

Installation
Clone this repository to your local machine.
bash
Copy
Edit
git clone https://github.com/Deflinger/virgenform.git
Navigate to the project directory.
bash
Copy
Edit
cd virgenform
Install the dependencies using npm or yarn.
bash
Copy
Edit
npm install

# or

yarn install
Technologies Used
React: Library for building user interfaces.
react-hook-form: For efficient form handling.
Zod: A runtime schema validation library.
CSS: Basic styling for the components.
Project Structure
src/App.css: Global styles for the app.
src/components/CustomForm/CustomForm.tsx: Component that manages the main form.
src/components/CustomInput.tsx: Reusable component for input fields with validation.
src/models.ts: Schema validation for form fields using Zod.
Functionality
App.tsx
The main component of the application renders the form, which is managed by the CustomForm component.

tsx
Copy
Edit
import './App.css';
import CustomForm from './components/CustomForm/CustomForm';

function App() {
return (
<>
<CustomForm />
</>
);
}

export default App;
CustomForm.tsx
The form is managed using react-hook-form with the help of zodResolver for validation. The fields are validated according to a schema defined in the models.ts file.

tsx
Copy
Edit
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from 'react-hook-form';
import InputForm from './components/CustomInput';
import { formValue, schema } from "./models";

const CustomForm = () => {
const { control, handleSubmit, formState: { errors } } = useForm<formValue>({
resolver: zodResolver(schema),
});

const onSubmit: SubmitHandler<formValue> = (data) => {
console.log(data);
};

return (
<form onSubmit={handleSubmit(onSubmit)}>
<InputForm name="name" control={control} label="Name" type="text" error={errors.name} />
<InputForm name="email" control={control} label="Email" type="email" error={errors.email} />
<InputForm name="password" control={control} label="Password" type="password" error={errors.password} />
<InputForm name="confirmPass" control={control} label="ConfirmPass" type="password" error={errors.confirmPass} />
<button type="submit">Submit</button>
</form>
);
};

export default CustomForm;
CustomInput.tsx
This component handles the rendering of each input field using react-hook-form and displays any validation errors if present.

tsx
Copy
Edit
import { Control, Controller, FieldError } from "react-hook-form";
import { formValue } from "../models";

interface Props {
name: keyof formValue;
control: Control<formValue>;
label: string;
type?: string;
error?: FieldError;
}

const InputForm = ({ name, control, label, type, error }: Props) => {
return (
<div className="form-group">
<label htmlFor={name}>{label}</label>
<Controller
name={name}
control={control}
render={({ field }) => (
<input
id={name}
type={type}
{...field}
className={`form-control ${error ? "is-invalid" : ""}`}
/>
)}
/>
{error && <p className="error">{error.message}</p>}
</div>
);
};

export default InputForm;
Validation Model (models.ts)
Defines the validation schema using zod.

tsx
Copy
Edit
import { z } from "zod";

export const schema = z.object({
name: z.string().min(1, "Name is required"),
email: z.string().email("Invalid email").min(1, "Email is required"),
password: z.string().min(6, "Password must be at least 6 characters long"),
confirmPass: z.string().min(6, "Password confirmation must be at least 6 characters long")
}).refine(data => data.password === data.confirmPass, {
message: "Passwords do not match",
path: ['confirmPass']
});

export type formValue = z.infer<typeof schema>;
Usage
Open the application in your browser.
Fill out the form fields.
Click "Submit" to see the data logged to the console.
Contributing
If you'd like to contribute to this project, please follow these steps:

Fork this repository.
Create your own branch (git checkout -b feature-new-feature).
Make your changes and commit them (git commit -am 'Add new feature').
Push the changes to your branch (git push origin feature-new-feature).
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.
