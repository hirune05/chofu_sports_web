import { Box,  Button,  FileInput,  TextInput, Textarea, rem } from "@mantine/core"
import { IconUpload } from "@tabler/icons-react";

const PostPage = () => {
  const icon = <IconUpload style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;
  return (
    <Box style={{
      height: "100vh",
      width: "100vw",
      padding: "8em",
      display:"flex",
      flexFlow:"column",
      gap:"1.2em"
    }}>
      
      <TextInput label="主催者名"/>
      <TextInput label="イベント名"/>
      <TextInput label="日時・場所"/>
      <Textarea 
      autosize={true}
      label="内容"/>
      <Textarea 
        autosize={true}
        label="その他・詳細"/>
      <FileInput
        leftSection={icon}
        label="背景の画像または動画をアップロード"
        placeholder="ファイルを選択"
        leftSectionPointerEvents="none"
      />
      <Button>
        投稿
      </Button>
    </Box>
  )
}

export default PostPage