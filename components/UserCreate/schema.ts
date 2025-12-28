import * as zod from "zod"

export const loginValidationSchema = zod.object({
    email: zod.email(),
    password: zod.string().min(8),
})
