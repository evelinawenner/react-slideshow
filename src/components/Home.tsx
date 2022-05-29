import { useState } from "react";
import { Heading, P } from "./globals/StyledElements";
import { HomeStyles } from "./HomeStyles";
import { Slider } from "./Slider";

export const Home = () => {
  const [showSlider, setShowSlider] = useState(false);

  const handleshow = () => setShowSlider(() => true);
  const handleClose = () => setShowSlider(() => false);
  return (
    <HomeStyles>
      <Heading>Wanna see some cool pix?</Heading>

      {showSlider ? (
        <>
          <P onClick={handleClose}>Nope</P>
          <Slider />
        </>
      ) : (
        <P onClick={handleshow}>Yes</P>
      )}
    </HomeStyles>
  );
};
