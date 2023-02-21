import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PROFILE from "@/data/profile";
import RESUME from "@/data/resume";
import { Resume } from "@/types";

const Home = () => {
  return (
    <div className="app">
      <Header className="app-header" profile={PROFILE} />
      <main className="app-body">
        {Object.keys(RESUME).map((key) => {
          const typedKey = key as keyof Resume;
          const value = RESUME[typedKey];
          return <Cards key={key} title={typedKey} data={value} />;
        })}
      </main>
      <Footer className="app-footer" />
    </div>
  );
};

export default Home;
