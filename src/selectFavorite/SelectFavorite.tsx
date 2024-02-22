import { Box,  Button,  Stack } from "@mantine/core"
import { useNavigate } from "react-router"

const SelectFavorite = () => {
  return (
    <Box>
      <h1>興味のあるジャンルを選んで始めよう</h1>
      <GenreButtonList/>
      <StartButton/>
    </Box>
  )
}

const StartButton = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/home")
  }

  return (
    <Button
      style={{
        margin: "auto",
        display: "block",
        marginTop: "30px"
      }}
      onClick={() => onClick()}
    >
      スタート
    </Button>
  )
}

const GenreButtonList = () => {
  return (
    <Stack>
      <GenreButton genre="ゲーム"/>
      <GenreButton genre="アニメ"/>
      <GenreButton genre="映画"/>
      <GenreButton genre="音楽"/>
      <GenreButton genre="スポーツ"/>
      <GenreButton genre="その他"/>
    </Stack>
  )
}

const GenreButton = ({
  genre
}: {
  genre: string
}) => {
  return (
    <Button
      style={{
        margin: "auto",
        display: "block",
        marginTop: "2vh"
      }}
    >
      {genre}
    </Button>
  )
}

export default SelectFavorite