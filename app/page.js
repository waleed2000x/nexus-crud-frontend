import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <p>Hello</p>
      <Button variant="outline">
        <Link href="/products">All Products</Link>
      </Button>
    </main>
  );
}
