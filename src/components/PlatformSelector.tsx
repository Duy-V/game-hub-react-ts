import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatform"
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatform";

interface Props {
  onSelectPlatform: (platform: Platform)=> void;
  selectedPlatform: Platform | null;
}
function PlatformSelector({onSelectPlatform, selectedPlatform}: Props) {
    const {data, error} = usePlatforms()
    if(error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}></MenuButton>
      <MenuList>
        {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
