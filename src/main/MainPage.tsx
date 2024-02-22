import { AspectRatio, Box, MantineStyleProp, Text } from "@mantine/core";
import { Carousel } from '@mantine/carousel';

const overlayBoxStyle : MantineStyleProp = {
    position: 'absolute',
    top: '50vh',
    left: '0',
    width: '100vw',
    height: '50vh',
    zIndex: 2, // Ensure the text appears above the video
    padding: '10px',
    background: 'rgba(0, 35, 71, 0.5)' // Optional: adds a semi-transparent background to the text for better readability
  }


export const MainPage = () => {
  return (
    <Carousel withControls={false} withIndicators={false} orientation="vertical" height="100vh"  >
      <Carousel.Slide><EventBox videoUrl="https://player.vimeo.com/external/474230654.sd.mp4?s=8b8a072e4f3e357127ee81c15652a331d9bd51f2&profile_id=165&oauth2_token_id=57447761"/></Carousel.Slide>
      <Carousel.Slide><EventBox videoUrl="https://player.vimeo.com/external/531149374.sd.mp4?s=5bb7cfd88ad746dba4000caf702f4c72d0f23f17&profile_id=165&oauth2_token_id=57447761"/></Carousel.Slide>
      <Carousel.Slide><EventBox videoUrl="https://player.vimeo.com/external/573343630.hd.mp4?s=b0a3ab7af9daeb7ad98a4ab764f65c6b5e1b055f&profile_id=174&oauth2_token_id=57447761"/></Carousel.Slide>
    </Carousel>
  );
}

const EventBox = ({
  videoUrl
}: {
  videoUrl: string
}) => {
  return (
    <Box style={{ position: 'relative' }}>
      <PhoneVideoPlayer srcUrl={videoUrl} />
    
      <Box style={overlayBoxStyle}>
      <Text style={{ color: "white"}}>イベント名：親子で楽しむスナッグゴルフとパターゴルフ</Text> 
      <Text style={{ color: "white"}}>日時：2021年10月31日（日）</Text>
      <Text style={{ color: "white"}}>場所：東京都中野区中野4-1-1</Text>
      </Box>
    </Box>
    )
}


const PhoneVideoPlayer = ({
  srcUrl
}: {
  srcUrl: string
}) => {
  return (
    <AspectRatio
      ratio={9 / 16}
      style={{
        margin: "auto",
        position: 'relative' // Ensure the container is positioned relatively for the absolute positioning of children
      }}
    >
      <video
        loop
        muted
        autoPlay
        src={srcUrl}
        style={{
          width: '100vw', // Ensure the video fills the container
          height: '100vh', // Ensure the video fills the container
          position: 'absolute', // Position the video absolutely to fill the container
          top: 0,
          left: 0
        }}
      />
    </AspectRatio>
  )
}
