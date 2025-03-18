import { z } from "zod";

export const schema = z.object({
    name:z.string().min(1,"El nombre es obligatorio"),
    email:z.string().email("Correo invalido").min(1,"El correo es obligatorio"),
    password:z.string().min(6,"La contraseña requiere mas de 6 caracteres"),
    confirmPass: z.string().min(6,"La confirmacion requiere mas de 6 caracteres")
}).refine(data => data.password === data.confirmPass,{
message:"Las contraseñas no coincide",
path:['confirmPass']
});

export type formValue =  z.infer<typeof schema>;