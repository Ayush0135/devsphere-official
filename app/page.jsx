import { Hero } from "@/components/Hero";
import { SuperProjectsSection } from "@/components/SuperProjectSection";
import { OurBusinessSection } from "@/components/OurBusinessSection";
import TrendingServicesSection from "@/components/TrendingServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StartCooperationSection from "@/components/StartCooperationSection";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
 <div className="relative w-full h-[99vh] md:h-[95vh] overflow-hidden">
<Hero/>
    </div>
    <div>
      <SuperProjectsSection/>
    </div>
    <div>
      <OurBusinessSection/>
    </div>
    <div>
      <TrendingServicesSection/>
    </div>
    <div>
       <TestimonialsSection />
    </div>
    <div>
          <StartCooperationSection />
    </div>
    </div>
  );
}
