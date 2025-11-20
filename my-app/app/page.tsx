import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h1>Hello The Project</h1>
    <Button>Click me</Button>
    <UserButton />
   </div>
  );
}
