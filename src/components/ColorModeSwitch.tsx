import { Switch, HStack, useColorMode } from '@chakra-ui/react'

function ColorModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack>
       <Switch onChange={toggleColorMode} isChecked={colorMode ==='dark'}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Switch>
    </HStack>
  )
}

export default ColorModeSwitch
