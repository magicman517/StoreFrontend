import { z } from "zod/v4";
import { m } from '$lib/paraglide/messages.js';

export const formSchema = z.object({
    email: z.email({ message: m["formErrors.invalidEmailError"]() }),
    password: z.string()
        .min(8, { message: m["formErrors.passwordLengthError"]() })
        .regex(/[A-Za-z]/, { message: m["formErrors.passwordLetterError"]() })
        .regex(/\d/, { message: m["formErrors.passwordNumberError"]() }),
    repeatPassword: z.string()
}).refine(
    (data) => data.password === data.repeatPassword,
    {
        message: m["formErrors.passwordsDoNotMatchError"](),
        path: ["repeatPassword"]
    }
);

export type FormSchema = typeof formSchema;