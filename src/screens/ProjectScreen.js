import {
  Flex,
  Text,
  Heading,
  Image,
  Grid,
  Box,
  Link,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import rst1 from "../images/rst1.png";
import { BiRightArrow, BiCheckCircle } from "react-icons/bi";
import { Header } from "../components/TitleHeader";
import { PageAnimation } from "../components/PageAnimations";

const projectScreen = () => {
  return (
    <>
      <PageAnimation color="yellow.700" />
      <Header children="Projects" />
      <Flex
        w="100%"
        justifyContent="center"
        align="center"
        mt="2rem"
        mb="10rem"
      >
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr",
            lg: "1fr",
          }}
          w="80vw"
          bgColor="primaryBlack.200"
          gap="1rem"
          rounded="md"
          ml={{ sm: "0", base: "0", md: "0", lg: "3rem" }}
        >
          <Flex direction="row" w="80vw">
            <Image src={rst1} objectFit="cover" w="full" />
          </Flex>

          <Box
            w="80vw"
            p={{ sm: "1rem", base: "1rem", md: "5rem", lg: "5rem" }}
            mb="10"
          >
            <Heading
              as="h3"
              fontSize={{
                base: ".5rem",
                md: "1.5rem",
                sm: ".5rem",
                lg: "2rem",
              }}
              color="white"
            >
              RST-STORE
            </Heading>
            <Text
              mt="2"
              w="full"
              fontSize={{ base: "xs", md: "1rem", sm: "xs", lg: "1rem" }}
              color="whiteAlpha.700"
            >
              Full stack E-commerce web application made with latest tranding
              technologies that comes with many Features.
            </Text>
            <Box mt="3.5">
              <Link
                href="https://www.google.com"
                color="white"
                textTransform="uppercase"
                _hover={{
                  color: "purple",
                }}
                target="_blank"
              >
                {" "}
                LIVE DEMo{" "}
              </Link>

              <Link
                href="https://www.google.com"
                color="white"
                ml="3"
                textTransform="uppercase"
                _hover={{
                  color: "purple",
                }}
                target="_blank"
              >
                GITHUB repo
              </Link>
            </Box>

            <Heading as="h6" color="white" fontSize="1.5rem" mt="8">
              System Architectural Pattern:
            </Heading>
            <List
              bg="primaryBlack.100"
              mt="2"
              ml={{ base: "1rem", sm: "1rem", md: "2rem", lg: "3rem" }}
              spacing={3}
              w="80%"
              p="6"
              rounded="md"
            >
              <ListItem color="white">
                <ListIcon color="green.500" as={BiRightArrow} />
                MVC(Model,View,Controller)
              </ListItem>
            </List>

            <Heading as="h6" color="white" fontSize="1.5rem" mt="8">
              Tech Stack Used:
            </Heading>
            <List
              spacing={3}
              bgColor="primaryBlack.100"
              mt="2"
              ml={{ base: "1rem", sm: "1rem", md: "2rem", lg: "3rem" }}
              w="80%"
              p="6"
              rounded="md"
            >
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                ReactJs
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                Nodejs
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                Express
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                MongoDB
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.700" />
                Others : Axios,mongoose,react-router-dom,chakra-ui
              </ListItem>
            </List>

            <Heading as="h6" color="white" fontSize="1.5rem" mt="8">
              Features:
            </Heading>
            <List
              spacing={3}
              bgColor="primaryBlack.100"
              mt="2"
              ml={{ base: "1rem", sm: "1rem", md: "2rem", lg: "3rem" }}
              w="80%"
              p="6"
              rounded="md"
            >
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                Authorization using jwt,Rest Api
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                Login,Logout,Register
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                Comment,Review,Rating
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                Cart,Checkout,Payment option selection,Payment(paypal)
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                View Profile and Update, View Orders
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                Admin , Admin Access , Product add and update, View Orders,Make
                it Delivered
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Flex>
    </>
  );
};

export default projectScreen;
