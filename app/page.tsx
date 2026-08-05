import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { DesignStyles } from "@/components/DesignStyles";
import { Products } from "@/components/Products";
import { Showroom360Teaser } from "@/components/Showroom360Teaser";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Services />
      <DesignStyles />
      <Products />
      <Showroom360Teaser />
      <Projects />
      <Process />
      <WhyUs />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
