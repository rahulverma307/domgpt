
import { ModeToggle } from "@/components/ui/toggle-mode";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
 <>
<div>
  <h1>Hello ji</h1>
   <ModeToggle />
   <UserButton/>
</div>

 </>
  );
}
