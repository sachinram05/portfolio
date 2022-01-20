import { Heading, Flex, Box, Icon, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FiInstagram, FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";
import { PageAnimation } from "../components/PageAnimations";

const SocialIcon = ({ children, url }) => {
  return (
    <Link
      borderRadius="50%"
      h="12"
      w="12"
      display="flex"
      alignItems="center"
      justifyContent="center"
      m="1"
      _hover={{
        bg: "primary.100",
      }}
      href={url}
      target="_blank"
    >
      {children}
    </Link>
  );
};

const HomeScreen = () => {
  const NAME = "{ SACHIN RAM }";
  return (
    <>
      <PageAnimation color="purple.700" />

      <Flex
        align="center"
        direction="column"
        justify="center"
        w="full"
        h="100vh"
        wrap="wrap"
      >
        <Heading
          as="h1"
          mb="3"
          fontSize={{ base: "50px", sm: "50px", md: "3rem", lg: "4rem" }}
          fontWeight="bold"
          textShadow="1px 1px primary.100"
          color="primary.100"
          textAlign="center"
        >
          {NAME}
        </Heading>
        <Heading
          as="h2"
          fontWeight="medium"
          letterSpacing="wide"
          color="whiteAlpha.700"
          fontSize={{ lg: "2xl", md: "1xl" }}
        >
          Full Stack JavaScript Developer
        </Heading>

        <Flex
          wrap="wrap"
          direction={{sm: "row", base: "column", md:"row", lg: "row"}}
          mt="3rem"
          mb="4"
        >
          <Box m="1rem">
            <Link
              as={RouterLink}
              to="/projects"
              w="232px"
              p={{sm: "7px 20px",
                  base : "7px 20px",
                  md: "10px 25px",
                  lg: "10px 25px",
                }}
              bg="whiteAlpha.800"
              _hover={{
                textDecor: "none",
                bg: "primary.100",
                color: "white",
              }}
              borderTopLeftRadius="2rem"
              borderBottomRightRadius="2rem"
              fontWeight="bold"
              textTransform="uppercase"
              textAlign="center"
            >
              My Projects
            </Link>
          </Box>
          <Box m="1rem">
            <Link
              as={RouterLink}
              to="/about"
              w="232px"
              p={{sm: "7px 20px", 
            base:"7px 20px",
          md:"10px 25px",
        lg: "10px  25px",
      }}
              bg="whiteAlpha.800"
              _hover={{
                textDecor: "none",
                bg: "primary.100",
                color: "white",
              }}
              borderTopLeftRadius="2rem"
              borderBottomRightRadius="2rem"
              fontWeight="bold"
              textTransform="uppercase"
              textAlign="center"
            >
              About Me
            </Link>
          </Box>
        </Flex>
        <Flex wrap="wrap" mt="1rem">
          <SocialIcon url="https://github.com/sachinram05">
            <Icon as={FiGithub} fontSize="20px" color="whiteAlpha.900" />
          </SocialIcon>
          <SocialIcon url="https://www.instagram.com/sach_in.005/">
            <Icon as={FiInstagram} fontSize="20px" color="whiteAlpha.900" />
          </SocialIcon>
          <SocialIcon url="https://www.linkedin.com/in/sachin-ram-37246422b/">
            <Icon as={FiLinkedin} fontSize="20px" color="whiteAlpha.900" />
          </SocialIcon>
          <SocialIcon url="https://www.facebook.com/profile.php?id=100027809021580">
            <Icon as={FiFacebook} fontSize="20px" color="whiteAlpha.900" />
          </SocialIcon>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeScreen;
