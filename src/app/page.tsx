import { HeroSimple } from "@/components/sections/HeroSimple";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PackageTiers } from "@/components/sections/PackageTiers";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSimple />
      <ServicesGrid />
      <PackageTiers />
    </main>
  );
}