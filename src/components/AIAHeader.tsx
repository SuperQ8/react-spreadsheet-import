/* eslint-disable prettier/prettier */

import { Box, Center, HStack, Link, Image, Spacer, Button, useStyleConfig } from "@chakra-ui/react";
import type { themeOverrides } from "../theme";

interface Props {
    onClose: () => void;
}

const AIAHeader = ({onClose}: Props) => {
    const fontFamilyAIA = 'aiaeverest';
    const fontFamilyOpenSans = 'Open Sans';    
    const styles = useStyleConfig("colors") as typeof themeOverrides["colors"]["rsi"]

    return (
        <Center mb={12}>
            <HStack w={1200} h={20} justifyItems={'center'} borderBottomRadius={'lg'} bg="white">
                <Box h={20} ml={16} display='flex' alignItems='center'>
                    <Link href='https://www.aia.com.au/en/individual/aia-vitality.html' isExternal>
                        <Image
                            boxSize='40px'
                            objectFit='cover'
                            src='/aialogo.svg'
                            alt='aialogo'
                        />
                    </Link>
                </Box> 
                <Spacer />     
                <Box h={20} display='flex' alignItems='center' fontFamily={fontFamilyAIA} color={styles[200]}>
                    <Button colorScheme='rsi' variant='outline' onClick={onClose} ml={8} mr={16}>
                        Exit
                    </Button>            
                </Box>   
            </HStack>   
        </Center>
    );
}

export default AIAHeader;