import React from 'react';
import Cam from 'react-webcam';
import proptypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { WebCamContainer } from './WebCamStyle';

function WebCam({ webcamRef, setIsVideoLoaded }) {
  const isMobile = useMediaQuery({ maxWidth: 700 });

  return (
    <WebCamContainer>
      {!isMobile && <img src="/images/monitor.svg" alt="" />}
      <Cam
        className="webcam"
        ref={webcamRef}
        onLoadedMetadata={() => setIsVideoLoaded(true)}
        width={isMobile ? 295 : 550}
        height={isMobile ? 395 : 400}
        autoPlay
        muted
      />
    </WebCamContainer>
  );
}

WebCam.propTypes = {
  webcamRef: proptypes.shape({
    current: proptypes.instanceOf(Cam),
  }).isRequired,
  setIsVideoLoaded: proptypes.func.isRequired,
};

export default WebCam;
