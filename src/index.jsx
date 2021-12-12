import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
    Box,
    Button, Center,
    ChakraProvider, Fade, Slide,
    useColorMode,
    useDisclosure
} from "@chakra-ui/react";

const App = () => {
    const { toggleColorMode } = useColorMode()
    const { isOpen, onToggle } = useDisclosure()
    return (
        <>
            <Button onClick={onToggle}>Click me…</Button>
                <Slide direction='bottom' in={isOpen} style={{ 'zIndex': 10 }}>
                    <Center>
                        <Box
                            w='50%'
                            p='40px'
                            color='white'
                            mt='4'
                            bg='teal.500'
                            rounded='md'
                            shadow='md'
                        >Hello world!</Box>
                    </Center>
                </Slide>
        </>
    )
}

ReactDOM.render(<ChakraProvider><App /></ChakraProvider>, document.getElementById('root'));