import UserForm from "@/components/UserCreate/UserForm";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {logout} from "@/components/UserCreate/userAction";
import UserLogin from "@/components/UserCreate/UserLogin";

export default async function Home() {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        return <>
            <UserLogin/>

        </>
    }

    return (
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, sapiente.
            <form action={logout}>
                <button type={'submit'} >Hesabdan cix</button>
            </form>
        </h1>
    );
}

