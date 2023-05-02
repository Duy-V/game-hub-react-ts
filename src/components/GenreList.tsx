import React from "react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenre";
import { List, ListItem, HStack, Image,Text, Spinner, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
interface Props {
onSelectGenre: (genre: Genre) => void
}
function GenreList({onSelectGenre}: Props) {
  const { data, isLoading, error } = useData<Genre>("/genres");
  if(error) return null;
  if (isLoading) return <Spinner/>
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
          <Button key={genre.id} onClick={()=> onSelectGenre(genre)} fontSize='lg'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
