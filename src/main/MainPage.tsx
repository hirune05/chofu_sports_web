import { AspectRatio, Box, Button, MantineStyleProp, Text } from "@mantine/core";
import { Carousel } from '@mantine/carousel';

const overlayBoxStyle : MantineStyleProp = {
    position: 'absolute',
    top: '45vh',
    left: '0',
    width: '100vw',
    height: '55vh',
    zIndex: 2, // Ensure the text appears above the video
    background: 'rgba(0, 35, 71, 0.5)',
    padding:"2em",
    display:"flex", flexFlow:"column",gap:"0.8em"
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
    <Box style={{ position: 'relative'}}>
      <PhoneVideoPlayer srcUrl={videoUrl} />
    
      <Box style={overlayBoxStyle}>
      <Text style={{ color: "white", fontSize: "5.2vW"}}>親子で楽しむスナッグゴルフとパターゴルフ</Text> 
      <Text style={{ color: "white",fontSize: "5.2vW"}}>主催：調布スポーツ協会</Text> 
      <Text style={{ color: "white",fontSize: "5.2vW"}}>概要:</Text> 
      <Box style={{border: "solid", borderColor: "white",padding:"1.2em",display:"flex", flexFlow:"column",gap:"1.2em"}}>
        <Text style={{ color: "white",fontSize: "4.0vW"}}>場所：東京都中野区中野4-1-1</Text>
        <Text style={{ color: "white",fontSize: "4.0vW"}}>料金：一人100円</Text>
        <Text style={{ color: "white",fontSize: "4.0vW"}}>内容：ヨネックス株式会社との協働事業として実施する、小学生を対象としたスナッグゴルフとパターゴルフの教室</Text>
        <Button variant="outline" color="white" style={{fontSize:"4.0vW"}}>詳細</Button>
      </Box>
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
