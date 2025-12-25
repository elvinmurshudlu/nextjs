import prisma from "@/lib/prisma";
import UserForm from "@/components/UserCreate/UserForm";

export default async function Home() {
  const user = await prisma.user.findMany()
  return (
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, sapiente.

          {
              user.map(u=>{
                  return <p key={u.id}>{u.email}</p>
              })
          }

          <UserForm/>
      </h1>
  );
}
