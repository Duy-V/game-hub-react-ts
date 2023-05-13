import { Box, Flex, Grid, GridItem, Show, Spacer } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import GameList from "./components/GameList";
import React, { createContext, useContext, useState } from "react";
import { LayoutProvider } from "./context/LayoutProvider";
import Content from "./components/Content";
import { LayoutContext } from "./context/LayoutContext";
import { DragHandleIcon, HamburgerIcon } from "@chakra-ui/icons";

const LayoutSwitcher = () => {
  const { isGridLayout, setIsGridLayout } = useContext(LayoutContext);

  const handleToggle = () => {
    setIsGridLayout(!isGridLayout);
  };

  return (
    <button onClick={handleToggle}>
      {isGridLayout ? (
        <HamburgerIcon boxSize={["60px", "60px", "60px"]} />
      ) : (
        <DragHandleIcon boxSize={["60px", "60px", "60px"]} />
      )}
    </button>
  );
};

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <LayoutProvider>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex justifyContent="space-between" flexWrap="wrap">
              <Box gap="2" marginRight="20px">
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
              </Box>
              <Box>
                <SortSelector
                  sortOrder={gameQuery.sortOrder}
                  onSelectSortOrder={(sortOrder) =>
                    setGameQuery({ ...gameQuery, sortOrder })
                  }
                />
              </Box>

              <Spacer />
              <LayoutSwitcher />
            </Flex>
          </Box>

          <Content gameQuery={gameQuery} />
        </GridItem>
      </LayoutProvider>
    </Grid>
  );
}

export default App;
