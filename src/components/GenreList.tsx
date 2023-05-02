import React from "react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenre";
import { List, ListItem, HStack, Image,Text, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data, isLoading, error } = useData<Genre>("/genres");
  if(error) return null;
  if (isLoading) return <Spinner/>
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
          <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
