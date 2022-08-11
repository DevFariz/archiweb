import TextBlock from "./textBlock/TextBlock";
import Slider from "./slider/Slider";

import "./Intro.scss";

const Intro = () => {
  return (
    <section>
      <div className="container-bg">
        <TextBlock />
        <Slider />
      </div>
    </section>
  );
};

export default Intro;
