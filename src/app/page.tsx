import Image from "next/image";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/theme-toggle";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-full flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className="text-3xl font-bold text-blue-700 font-poppins">Hello World</h1>
      <Button variant="default" size="default">Click me</Button>
    </div>
  );
}
