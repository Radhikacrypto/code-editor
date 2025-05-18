import { currentUser } from "@clerk/nextjs/server"


 async function Header() {

    const user= await currentUser()
  return (
    <div>Header</div>
  )
}

export default Header