import { Box,  Button,  Stack } from "@mantine/core"
import { useState } from "react"
import { useNavigate } from "react-router"

const SelectFavorite = () => {
  return (
    <Box style={{ height: "100vh"}}>
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
      color="#5ABACF"
      style={{
        bottom: "0",
        width: "100vw",
        height: "14vh",
        position: "absolute"
      }}
      onClick={() => onClick()}
    >
     スタート
    </Button>
  )
}

const GenreButtonList = () => {
  const genres = ["ゲーム", "アニメ", "映画", "音楽", "スポーツ", "その他"]
  return (
    <Stack >
      {genres.map((genre) => {
        return (
          <GenreButton genre={genre}/>
        )
      })}
      
    </Stack>
  )
}

const GenreButton = ({
  genre
}: {
  genre: string
}) => {

  const [isSelected, setIsSelected] = useState<boolean>(false)

  const selectedColor = "#0B71AB"
  const unselectedColor = "#D9D9D9"
  
  return (
    <Button variant="filled" color={isSelected ? selectedColor : unselectedColor} size="md" radius="xl" style={{
      margin: "auto",
      display: "block",
      marginTop: "10px"
    }}
    onClick={() => setIsSelected(!isSelected)}
    >{genre}</Button>
  )
}

export default SelectFavorite