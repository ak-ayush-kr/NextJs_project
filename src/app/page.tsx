import Image from "next/image";
import Herosection from "@/components/Herosection";
import Featurecourse from "@/components/Featurecourse";
import Feature from "@/components/Feature";
import FeatureMovingcards from "@/components/FeatureMovingcards";
import FeatureWebinar from "@/components/Webinar";
import FeatureInstructor from "@/components/FeatureInstructor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Herosection/>
      <Featurecourse/>
      <Feature/>
      <FeatureMovingcards/>
      <FeatureWebinar/>
      <FeatureInstructor/>
      <Footer/>
    </div>
  );
}
