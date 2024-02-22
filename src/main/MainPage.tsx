import { AspectRatio, Box } from "@mantine/core"


export const MainPage = () => {
  return (
    <Box>
      {/* ハリボテ */}
      <PhoneVideoPlayer srcUrl="https://player.vimeo.com/external/531149374.sd.mp4?s=5bb7cfd88ad746dba4000caf702f4c72d0f23f17&profile_id=165&oauth2_token_id=57447761"/>
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
        margin: "auto"
      }}
    >
      <video
        loop
        controls
        muted
        src={srcUrl}
        />
    </AspectRatio>
  )
}