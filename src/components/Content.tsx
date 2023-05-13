import React, { createContext, useContext, useState } from 'react';
import {LayoutContext} from '../context/LayoutContext';
import GameGrid from './GameGrid';
import GameList from './GameList';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/useGames';
 interface GameQuery { 
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
  }
function Content({gameQuery}: any) {
    const { isGridLayout } = useContext(LayoutContext);
  
    return <>{isGridLayout ? <GameGrid gameQuery={gameQuery}/> : <GameList gameQuery={gameQuery} />}</>;
}

export default Content



