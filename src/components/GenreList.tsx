import React from 'react'
import useData from '../hooks/useData';
import { Genre } from '../hooks/useGenre';

function GenreList() {
    const {data} = useData<Genre>('/genres');
  return (
<ul>{data.map(genre => <li key={genre.id}>{genre.name}</li>)}</ul>
  )
}

export default GenreList
