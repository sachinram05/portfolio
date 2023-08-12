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
import rststoreimage from '../images/rststore.png';

import sggsUI from '../images/sggsUI.jpeg';

import sggsAdmin from '../images/sggsAdmin.jpeg';

import cakefactoryUI from '../images/cakeFactoryUI.jpeg';

import cakeFactoryAdmin from '../images/cakeFactoryAdmin.jpeg';

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
          gap="1rem"
          rounded="md"
          ml={{ sm: "0", base: "0", md: "0", lg: "3rem" }}
        >
           <Flex
          bgColor="primaryBlack.200"
          direction='column'
          mt='20'
           >
          <Flex direction="row" w="80vw">
            <Image src={rststoreimage} objectFit="cover" w="full" />
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
                href="http://rststore33.herokuapp.com/"
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
                href="https://github.com/sachinram05/rststore"
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
          </Flex>
          <Flex
           direction='column'
           mt='20'
          bgColor="primaryBlack.200"
           >
          <Flex direction="row" w="80vw" >
            <Image src={cakefactoryUI} objectFit="cover" w="full" />
          </Flex>

          <Box
            w="80vw"
            bgColor="primaryBlack.200"
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
              Cake Factory UI
            </Heading>
            <Text
              mt="2"
              w="full"
              fontSize={{ base: "xs", md: "1rem", sm: "xs", lg: "1rem" }}
              color="whiteAlpha.700"
            >
             web application made with latest tranding
              technologies that comes with many Features.
            </Text>
            <Box mt="3.5">
              <Link
                href="http://qa.efendibey.digiklug.com:440/"
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
                href="https://bitbucket.org/dkproducts/cakefactory/src/master/"
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
              {/* <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                Express
              </ListItem> */}
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                MongoDB
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.700" />
                Others : Axios, BootStrap
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
                Rest Api
              </ListItem>
              {/* <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                Login,Logout,Register
              </ListItem> */}
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                Comment,Review,Rating
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                Cart,Checkout,Payment option selection,Payment(Razorpay)
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                View Profile and Update, View Orders
              </ListItem>
              {/* <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                Admin , Admin Access , Product add and update, View Orders,Make
                it Delivered
              </ListItem> */}
            </List>
          </Box>
</Flex>
<Flex
 direction='column'
 mt='20'
          bgColor="primaryBlack.200"
           >
          <Flex direction="row" w="80vw">
            <Image src={cakeFactoryAdmin} objectFit="cover" w="full" />
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
              Cake Factory Admin
            </Heading>
            <Text
              mt="2"
              w="full"
              fontSize={{ base: "xs", md: "1rem", sm: "xs", lg: "1rem" }}
              color="whiteAlpha.700"
            >
             Backend to handle apis , product & payment details , invoice, sms/email , cronJob  etc..
            </Text>
            <Box mt="3.5">
              <Link
                href="http://qa.efendibey.digiklug.com:441/"
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
                href="https://bitbucket.org/dkproducts/cakefactory/src/master/"
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
            APIS,Handlers,Controllers,DBConnection,JWT
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
                Angular
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                Nodejs
              </ListItem>
              {/* <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                Express
              </ListItem> */}
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                MySQL
              </ListItem>
              {/* <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.700" />
                Others : Axios,mongoose,react-router-dom,chakra-ui
              </ListItem> */}
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
                Authorization using jwt,Rest Apis
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
                Checkout,Payment option selection,Payment(paypal)
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                create User,update(permissions), delete 
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                create product,update, delete Tags(session,ratings,bestseller,VEG/NONVEG) etc
              </ListItem>
            </List>
          </Box> 
          </Flex> 
          <Flex
           direction='column'
           mt='20'
          bgColor="primaryBlack.200"
           >
          <Flex direction="row" w="80vw" >
            <Image src={sggsUI} objectFit="cover" w="full" />
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
              SGGS UI
            </Heading>
            <Text
              mt="2"
              w="full"
              fontSize={{ base: "xs", md: "1rem", sm: "xs", lg: "1rem" }}
              color="whiteAlpha.700"
            >
              web application made with latest tranding
              technologies that comes with many Features.
            </Text>
            <Box mt="3.5">
              <Link
                href="https://www.sggsqa.com.au/"
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
                href="https://bitbucket.org/dkproducts/cakefactory/src/master/"
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
                <ListIcon as={BiRightArrow} color="green.700" />
                Axios , localStorage, sessionStorage
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.700" />
                Material UI, loaders, snackbar, dialogbox
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
                Login,Logout
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                Trainings(MCQs and Video/PDF), Result
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                upload Documents
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                View Profile and Update
              </ListItem>
            </List>
          </Box>
        </Flex>
        <Flex
         direction='column'
         mt='20'
          bgColor="primaryBlack.200"
           >
          <Flex direction="row" w="80vw" >
            <Image src={sggsAdmin} objectFit="cover" w="full" />
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
              SGGS admin
            </Heading>
            <Text
              mt="2"
              w="full"
              fontSize={{ base: "xs", md: "1rem", sm: "xs", lg: "1rem" }}
              color="whiteAlpha.700"
            >
              web application made with latest tranding
              technologies that comes with many Features.
            </Text>
            <Box mt="3.5">
              <Link
                href="https://sggsqa.com.au/api/administrator/"
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
                href="https://bitbucket.org/dkproducts/cakefactory/src/master/"
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
                Strapi
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                PluginsUI
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                Apis
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
                Authorization,Rest Api
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                Login,Logout,Register
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
               Collections Trees
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                View Profile and Update, Dark and Light Mode
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                CronJobs , SMS , Email, pdfs 
              </ListItem>
            </List>
          </Box>
          </Flex>
        </Grid>
      </Flex>
    </>
  );
};

export default projectScreen;
