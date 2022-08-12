import TextBlock from "./textBlock/TextBlock";
import Slider from "./slider/Slider";

import "./Intro.scss";

const Intro = () => {
  return (
    <section className="intro">
      <div className="container-bg">
        <div className="intro-container">
          <TextBlock />
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Intro;
