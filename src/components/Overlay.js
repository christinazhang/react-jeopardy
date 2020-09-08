import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggleOverlay } from "../redux/actions";
import { LOCAL, YOUTUBE, GOOGLE_DRIVE } from "../mediaTypes";

const OverlayContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  background-color: #102278;
  height: 100%;
  width: 100%;
  transition: all 0.2s;
  color: #fff;
`;

const OverlayContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 12px 120px;
  text-align: center;
`;

const Clue = styled.div`
  font-size: 3.5em;
  margin-bottom: 72px;
  max-width: 800px;
  font-family: ${(props) => props.font ?? "ITC Korinna"};
  text-shadow: 4px 4px #000;
`;

const ClueMedia = styled.div`
  margin-bottom: 72px;
`;

const ImageContainer = styled.img`
  max-width: 560px;
  max-height: 315px;
  object-fit: cover;
`;

const DailyDoubleLabel = styled.div`
  font-family: "Steile Futura BQ";
  font-size: 8em;
  line-height: 0.9;
  margin-bottom: 72px;
`;

const DailyDouble = (
  <DailyDoubleLabel>
    <div>DAILY</div>
    <div>DOUBLE</div>
  </DailyDoubleLabel>
);

const FinalJeopardyLabel = styled.div`
  font-family: "Swiss 911 Compressed";
  font-size: 8em;
  line-height: 0.9;
  margin-bottom: 72px;
  max-width: 800px;
`;

const FinalJeopardy = (category) => (
  <FinalJeopardyLabel>{category.toUpperCase()}</FinalJeopardyLabel>
);

function VideoPlayer(videoModel) {
  switch (videoModel.type) {
    case LOCAL:
      return (
        <video width="560" height="315" controls>
          <source src={videoModel.src} type="video/mp4" />
        </video>
      );
    case YOUTUBE:
      const youtubeSrc = videoModel.src.replace("watch?v=", "embed/");
      return (
        <iframe
          title="youtube video"
          width="560"
          height="315"
          src={youtubeSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    case GOOGLE_DRIVE:
      const driveSrc = videoModel.src.replace("view?usp=sharing", "preview");
      return (
        <iframe
          title="google drive video"
          src={driveSrc}
          width="560"
          height="315"
        ></iframe>
      );
    default:
      return null;
  }
}

function AudioPlayer(audioModel) {
  switch (audioModel.type) {
    case LOCAL:
      return (
        <audio controls>
          <source src={audioModel.src} type="audio/mpeg"></source>
        </audio>
      );
    case GOOGLE_DRIVE:
      const driveSrc = audioModel.src.replace("view?usp=sharing", "preview");
      return (
        <iframe
          title="google drive audio"
          src={driveSrc}
          width="330"
          height="150"
        ></iframe>
      );
    default:
      return null;
  }
}

const ClueContent = ({ text, image, video, audio, font, component }) => (
  <div>
    {text && <Clue font={font}>{text.toUpperCase()}</Clue>}
    {component && component}
    {video && <ClueMedia>{VideoPlayer(video)}</ClueMedia>}
    {audio && <ClueMedia>{AudioPlayer(audio)}</ClueMedia>}
    {image && (
      <ClueMedia>{<ImageContainer src={image.src} alt="clue" />}</ClueMedia>
    )}
  </div>
);
class Overlay extends React.Component {
  constructor(props) {
    super(props);
    let overlays = [];
    if (this.props.isDailyDouble) {
      overlays.push({ component: DailyDouble });
    }
    if (this.props.isFinalJeopardy) {
      overlays.push({ component: FinalJeopardy(this.props.category) });
    }
    overlays.push({ ...this.props });
    this.state = { overlays: overlays, activeOverlayIndex: 0 };
  }

  handleClick = () => {
    if (this.state.activeOverlayIndex === this.state.overlays.length - 1) {
      this.props.toggleOverlay(false);
    }
    this.setState({ activeOverlayIndex: this.state.activeOverlayIndex + 1 });
  };

  render() {
    const { overlays, activeOverlayIndex } = this.state;
    return (
      <OverlayContainer onClick={this.handleClick}>
        <OverlayContent>
          {ClueContent({ ...overlays[activeOverlayIndex] })}
          (Click anywhere to continue)
        </OverlayContent>
      </OverlayContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.overlay.activeClue,
  };
}

export default connect(mapStateToProps, { toggleOverlay })(Overlay);
