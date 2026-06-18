import Hero from "@/components/home/Hero";
import CollectionsGrid from "@/components/home/CollectionsGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import DesignYourOwn from "@/components/home/DesignYourOwn";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CollectionsGrid />
      <FeaturedProducts />
      <DesignYourOwn />
      <HowItWorks />
      <Testimonials />
    </>
  );
}
