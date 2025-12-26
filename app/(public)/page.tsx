import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {logout} from "@/components/UserCreate/userAction";

import LoginForm from "@/components/UserCreate/LoginForm";

export default async function Home() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        return <>
            <LoginForm/>
        </>
    }
    return (
        <div className={'p-4 flex items-center flex-col justify-center gap-4'}>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, sapiente.
                <form action={logout}>
                    <button type={'submit'} >Hesabdan cix</button>
                </form>
            </h1>
        </div>
    );
}

