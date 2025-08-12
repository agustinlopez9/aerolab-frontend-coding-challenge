import { Fragment } from "react";
import styled from "styled-components";
import { SingleWavePattern } from "assets/illustrations";

const WavePatternBackground = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  width: 100%;
  height: 756px;
  background-image: url(${SingleWavePattern});
  z-index: -1;
`;

function WaveBackground() {
  return (
    <Fragment>
      <WavePatternBackground top="210px" />
      <WavePatternBackground top="196.5px" />
    </Fragment>
  );
}

export default WaveBackground;
