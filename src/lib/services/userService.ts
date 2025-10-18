import type { z } from "zod";
import { formSchema, type FormSchema } from "../../routes/signup/schema";
import { GATEWAY_API_URL } from "$env/static/private";

export async function createUser(
    data: z.infer<typeof formSchema>,
    fetch: typeof globalThis.fetch,
    headers: {} = {}
) {
    const response = await fetch(`${GATEWAY_API_URL}/auth/users`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        credentials: 'include'
    });
    return response;
}