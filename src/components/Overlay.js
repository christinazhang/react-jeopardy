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
  width: 100%;
  padding: 12px 120px;
  text-align: center;
`;

const Clue = styled.div`
  font-size: 3em;
  font-weight: 700;
  margin-bottom: 72px;
`;

const ClueMedia = styled.div`
  margin-bottom: 72px;
`;

const ImageContainer = styled.img`
  max-width: 560px;
  max-height: 315px;
  object-fit: cover;
`;

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
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
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

class Overlay extends React.Component {
  handleClick = () => {
    this.props.toggleOverlay(false);
  };

  render() {
    return (
      <OverlayContainer onClick={this.handleClick}>
        <OverlayContent>
          <Clue>{this.props.text.toUpperCase()}</Clue>
          {this.props.video && (
            <ClueMedia>{VideoPlayer(this.props.video)}</ClueMedia>
          )}
          {this.props.audio && (
            <ClueMedia>{AudioPlayer(this.props.audio)}</ClueMedia>
          )}
          {this.props.image && (
            <ClueMedia>
              {<ImageContainer src={this.props.image.src} alt="clue" />}
            </ClueMedia>
          )}
          (Click anywhere to close)
        </OverlayContent>
      </OverlayContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.overlay.activeClue.text,
    video: state.overlay.activeClue.video,
    audio: state.overlay.activeClue.audio,
    image: state.overlay.activeClue.image,
  };
}

export default connect(mapStateToProps, { toggleOverlay })(Overlay);
