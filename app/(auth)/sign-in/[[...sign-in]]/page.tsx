import { SignIn } from '@clerk/nextjs'

const Page = () => {
  return (<SignIn forceRedirectUrl={"/"}/>)
}

export default Page
