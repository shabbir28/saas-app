import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import Cta from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard 
        id="123"
        name="Neura the Brainy Explorer"
        topic="Neural Network of the brain"
        subject="science"
        duration={45}
        color="#BDE7FF"
        />
        <CompanionCard 
        id="789"
        name="Grow your linguistic ability."
        topic="Language"
        subject="English Literature"
        duration={45}
        color="#ffda6e"
        />
        <CompanionCard 
        id="456"
        name="Countsy the Number Wizard"
        topic="Derivates & Integrals"
        subject="Math"
        duration={30}
        color="#efd0ff"
        />
      </section>
      <section className="home-section">
        <CompanionList 
        title = "Recently completed Sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        />
        <Cta/>

      </section>
    </main>
  );
};

export default Page;
