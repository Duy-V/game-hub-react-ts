import { Switch, HStack, useColorMode,Text } from '@chakra-ui/react'

function ColorModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack>
       <Switch onChange={toggleColorMode} isChecked={colorMode ==='dark'}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Switch>
      <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
