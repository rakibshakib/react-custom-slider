import ImageSlider from "./ImageSlider";
import "./slider.css"

const slideContainer = [
  {
    title: "Mission",
    description:
      "To be the foremost digital agriculture platform in South - Asia, admired for its impact on collaborative food production and boosting food security across the country",
  },
  {
    title: "Vision",
    description: "Democratize Agriculture financing and Supply chain",
  },
  {
    title: "Values",
    description: [
      "Courage",
      "Judgment",
      "Curiousness",
      "Getting things done",
      "Impact and Inclusiveness",
      "Trust and Integrity",
    ],
  },
];

const Slider = () => {
  return (
    <div
      style={{
        maxWidth: "400px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider contentList={slideContainer} />
    </div>
  );
};

export default Slider;
