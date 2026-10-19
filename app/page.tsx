import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { DesignStyles } from "@/components/DesignStyles";
import { Products } from "@/components/Products";
import { getCmsCategoryImageMap } from "@/lib/cms";
import { Showroom360Teaser } from "@/components/Showroom360Teaser";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

export default async function Home() {
  // Server Component - fetch ảnh CMS 1 lần ở đây (cache tag "cms-images"), truyền xuống
  // Products (Client Component) dưới dạng object thuần (Map không serialize được qua
  // ranh giới Server -> Client Component của Next.js).
  const cmsCategoryImages = Object.fromEntries(await getCmsCategoryImageMap());

  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Services />
      <DesignStyles />
      <Products categoryImages={cmsCategoryImages} />
      <Showroom360Teaser />
      <Projects />
      <Process />
      <WhyUs />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
