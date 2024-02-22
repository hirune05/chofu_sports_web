import { Box,  Button,  Group } from "@mantine/core"
import { useState } from "react"
import { useNavigate } from "react-router"

const SelectFavorite = () => {
  return (
    <Box style={{ height: "100vh"}}>
      <h1 style={{ padding: "1.2rem"}}
      >興味のあるジャンルを選んで始めよう
      </h1>
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
        height: "16vh",
        position: "absolute",
        fontSize: "1.6rem"
      }}
      onClick={() => onClick()}
    >
    スタート
    </Button>
  )
}

const GenreButtonList = () => {
  const genres = ["土日", "サッカー", "バスケ", "子供と参加", "平日夜", "障がい者スポーツ", "ゴルフ","バレー", "野球", "テニス", "バドミントン", "水泳", "陸上", "ヨガ", "フィットネス"]
  return (
    <Group style={{padding: "1.2rem"}}>
      {genres.map((genre) => {
        return (
          <GenreButton genre={genre}/>
        )
      })}
      
    </Group>
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
    <Button variant="filled" color={isSelected ? selectedColor : unselectedColor} size="lg" radius="xl" style={{
      color: isSelected? "white" : "#4F4F52"
    }}
    onClick={() => setIsSelected(!isSelected)}
    >{genre}</Button>
  )
}

export default SelectFavorite