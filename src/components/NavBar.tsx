import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { DragHandleIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';
// import { useLayoutMode } from '../context/LayoutModeContext';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const [ layoutMode, setLayoutMode ] = useState(false);

  const toggleLayoutMode = () => {
    setLayoutMode(!layoutMode);
  };
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px' />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
      {/* <LayoutSwitcher /> */}
      {/* {layoutMode ? <HamburgerIcon onClick={toggleLayoutMode}/> : <DragHandleIcon onClick={toggleLayoutMode}/> } */}
    </HStack>
  )
}

export default NavBar