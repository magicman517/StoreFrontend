import type { PageServerLoad, Actions } from "./$types.js";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod4 } from "sveltekit-superforms/adapters";
import { formSchema } from "./schema";
import { createUser } from "@/services/userService.js";

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod4(formSchema)),
    };
};

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, zod4(formSchema));
        if (!form.valid) {
            return fail(400, {
                form,
            });
        }

        const locale = event.cookies.get("PARAGLIDE_LOCALE") ?? "en";
        const response = await createUser(form.data, event.fetch, { "Accept-Language": locale });

        console.log("response:", response);

        return {
            form,
        };
    },
};

