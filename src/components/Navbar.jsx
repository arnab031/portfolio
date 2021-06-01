import { Center, Flex, Heading, Spacer, Text  } from '@chakra-ui/layout'
import React from 'react'
import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon, FaHome } from 'react-icons/fa'
import { useMediaQuery } from '@chakra-ui/media-query';
import {GiSkills} from 'react-icons/gi'
import {SiAboutDotMe} from 'react-icons/si'
import {Link} from 'react-router-dom'
import { Menu, MenuButton, MenuList,MenuItem } from '@chakra-ui/menu';
import { HamburgerIcon } from '@chakra-ui/icons'


function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
    <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight='semibold' color="cyan.400">Arn@b</Heading>

        <Spacer></Spacer>
        {isNotSmallerScreen?(
            <>
        <Link to="/">
            <Center ml={2}>
                <IconButton icon={<FaHome />} isRound='true'></IconButton>
                <Text fontWeight="semibold" ml="0.5">Home</Text>
            </Center>
        </Link>
        <Link to="/about">
        <Center ml={2}>
            <IconButton icon={<SiAboutDotMe />} isRound='true' ml="2"></IconButton>
            <Text fontWeight="semibold" ml="0.5">About</Text>
        </Center>
        </Link>
        <Link to="/skill">
        <Center ml={2}>
            <IconButton icon={<GiSkills />} isRound='true'></IconButton>
            <Text fontWeight="semibold" ml="0.5">Skill</Text>
            </Center>
        </Link>
        </>):(
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon/>}
                variant="outline"
            />
            <MenuList>
            <Link to="/">
                <MenuItem icon={<FaHome />}>
                    <Text fontWeight="semibold">Home</Text>
                </MenuItem>
                </Link>
                <Link to="/about">
                <MenuItem icon={<SiAboutDotMe />}>
                    <Text fontWeight="semibold">About</Text>
                </MenuItem>
                </Link>
                <Link to="/skill">
                <MenuItem icon={<GiSkills />}>
                    <Text fontWeight="semibold">Skill</Text>
                </MenuItem>
                </Link>
                
            </MenuList>
        </Menu>
        )}
        {/* <IconButton icon={<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaLinkedin />} isRound='true' onClick={toggleColorMode}></IconButton> */}
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
    </Flex>
    )
}

export default Navbar

