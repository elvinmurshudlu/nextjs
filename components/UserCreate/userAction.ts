'use server'

import {auth} from "@/lib/auth";
import {redirect} from "next/navigation";
import {headers} from "next/headers";

export async function createUser(userCredential: FormData) {
    const name = userCredential.get('name')?.toString() ?? ''
    const password = userCredential.get('password')?.toString() ?? ''
    const email = userCredential.get('email')?.toString() ?? ''
    await  auth.api.signUpEmail({
       body:{
           email,
           name: name,
           password
       }
    })
    redirect('/')
}

export async function logout(){
    await auth.api.signOut({
        headers:await headers()

    })
}

export async  function login(userCredential: FormData){
    const password = userCredential.get('password')?.toString() ?? ''
    const email = userCredential.get('email')?.toString() ?? ''
    await  auth.api.signInEmail({
        body:{
            email ,
            password
        }
    })
}