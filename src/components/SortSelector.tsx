import { MenuButton, MenuItem, MenuList, Menu,Button } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

function SortSelector() {
    
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order By: Relevance</MenuButton>
      <MenuList>
<MenuItem>Relevance</MenuItem>
<MenuItem>Date Added</MenuItem>
<MenuItem>Name</MenuItem>
<MenuItem>Release Date</MenuItem>
<MenuItem>Popularity</MenuItem>
<MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default SortSelector
