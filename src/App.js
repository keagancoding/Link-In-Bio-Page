import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Image,
  List,
  HStack,
} from '@chakra-ui/react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillSchedule, AiFillYoutube } from 'react-icons/ai';
import { MdWeb } from 'react-icons/md';
import { motion } from 'framer-motion';

function App() {
  const links = [
    {
      url: 'https://google.com',
      icon: AiFillYoutube,
      text: 'Youtube',
      iconColor: 'red.500',
    },
    {
      url: 'https://google.com',
      icon: MdWeb,
      text: 'Website',
      iconColor: 'gray.900',
    },
    {
      url: 'https://google.com',
      icon: AiFillGithub,
      text: 'Github',
      iconColor: 'purple.800',
    },
    {
      url: 'https://google.com',
      icon: AiFillInstagram,
      text: 'Instagram',
      iconColor: 'orange.600',
    },
    {
      url: 'https://google.com',
      icon: AiFillFacebook,
      text: 'Facebook',
      iconColor: 'blue.500',
    },
    {
      url: 'https://google.com',
      icon: AiFillSchedule,
      text: 'Schedule With Me',
      iconColor: 'gray.800',
    },
  ];

  const parentContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const childElement = {
    hidden: { opacity: 0, x: '-50px' },
    show: { opacity: 1, x: '0px' },
  };
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} bgGradient="linear(to-b, purple.800, yellow.200)">
          <VStack marginTop="3em">
            <Image
              w="10em"
              src="./logo512.png"
              borderRadius="50%"
              boxShadow="0px 0px 30px rgba(0,0,0,0.5)"
              p="1em"
              as={motion.img}
              initial={{ scale: 0}}
              animate={{ scale: 1}}
              transition="linear 0.1s"
            />
            <Text
              fontSize={30}
              fontWeight="bold"
              as={motion.h1}
              initial={{x: "-50px"}}
              animate={{x: "0px"}}
              transition="linear 0.1s"
            >
              Keagan Roach
            </Text>
            <List
              as={motion.ul}
              variants={parentContainer}
              initial="hidden"
              animate="show"
            >
              {links.map(link => (
                <a href={link.url}>
                  <HStack
                    w="15em"
                    h="3em"
                    borderRadius="lg"
                    bgColor="rgba(255,255,255,0.5)"
                    p="1em"
                    marginY="1em"
                    as={motion.div}
                    variants={childElement}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.1 }}
                  >
                    <Text
                      color="gray.900"
                      fontSize={20}
                      fontWeight="bold"
                      marginRight="auto"
                    >
                      {link.text}
                    </Text>
                    <Text as={link.icon} color={link.iconColor} fontSize={30} />
                  </HStack>
                </a>
              ))}
            </List>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
