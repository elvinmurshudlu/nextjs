import { login } from "@/components/UserCreate/userAction"

function UserForm() {
    return (
        <form
            className={"flex flex-col gap-3"}
            action={login}
        >
            <input
                placeholder={"email"}
                name={"email"}
                type="text"
            />
            <input
                placeholder={"password"}
                name={"password"}
                type="text"
            />
            <button type={"submit"}>Submit</button>
        </form>
    )
}

export default UserForm
