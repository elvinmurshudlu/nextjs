import {createUser} from "@/components/UserCreate/userAction";

function UserForm() {
    return (
        <form action={createUser}>
            <input placeholder={'name'} name={'name'} type="text"/>
            <input placeholder={'surname'} name={'surname'} type="text"/>
            <input placeholder={'email'} name={'email'} type="text"/>
            <button type={'submit'}>Submit</button>
        </form>
    );
}

export default UserForm;