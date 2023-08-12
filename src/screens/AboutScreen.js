import { Link, Box, Grid, Flex, Icon, Text, Image } from "@chakra-ui/react";
import { BlockHead, Header } from "../components/TitleHeader";
import { TextIcon, SkillIcon } from "../components/TextIcon";
import sachinImage from "../images/sachinImage.jpeg"
import sachincv from '../images/SachinResume.pdf'
import {
  FaMapMarkedAlt,
  FaGamepad,
  FaCode,
  FaMusic,
  FaArrowRight,
  FaReact,
  FaHtml5,
  FaCss3,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { BiCycling } from "react-icons/bi";
import { PageAnimation } from "../components/PageAnimations";
import { SiRedux, SiMongodb, SiFlutter, SiReactivex, SiDart, SiMaterialdesign} from "react-icons/si";

const AboutScreen = () => {
  return (
    <>
      <PageAnimation color="green.700" />
      <Header children="About Me" />
      <Flex justify="center" align="center" direction="column" w="full">
        <Flex
          justify="space-between"
          w="80vw"
          p="1rem"
          bg="primaryBlack.200"
          ml={{ sm: "0", base: "0", md: "0", lg: "3rem" }}
          mt="2rem"
          borderRadius="md"
        >
          <Text as="p" color="white" fontSize="1rem" fontWeight="bold">
            Personal Information
          </Text>
          <Link
            _hover={{
              textDecoration: "none",
              color: "primary.100",
            }}
            fontSize="1rem"
            href={sachincv}
            color="white"
            display={{ sm: "none", base: "none", md: "block", lg: "block" }}
            textDecoration="none"
            target="_blank"
          >
            Download CV
          </Link>
        </Flex>
        <Flex
          justify="space-between"
          mt="1"
          ml={{ sm: "0", base: "0", md: "0", lg: "3rem" }}
          direction={{ sm: "column", base: "column", md: "row", lg: "row" }}
          align="center"
          w="80vw"
          p="1rem"
          minH="26rem"
          bg="primaryBlack.200"
          borderRadius="md"
        >
          <Image
            objectFit="cover"
            h="15rem"
            w="15rem"
            borderRadius="50%"
            src={sachinImage}
            alt="sachin"
            mr={{ sm: "0", base: "0", md: "2rem", lg: "2rem" }}
            mb={{ sm: "2rem", base: "2rem", md: "0", lg: "0" }}
            ml={{ sm: "0", base: "0", md: "2rem", lg: "2rem" }}
          />
          <Flex direction="column" p="2rem">
            <Text mb="1" color="white" fontSize="2xl" fontWeight="medium">
              Sachin Ram
            </Text>
            <Text color="primary.100">
              <Icon as={FaMapMarkedAlt} mr="2" />
              Mumbai, India
            </Text>
            <Text color="white" mt="2" fontSize="md" pb="2rem">
              Hey, I am Sachin Ram. I am a young developer, from India and
              despite my age, I have a lot of experience in programming . I am
              someone who is very passionate about Programming and coding
              especially Web Development related stuff. I like to work in HTML,
              CSS, JavaScript, React, NextJS, Node, Express, MongoDB,Flutter,ReactNative etc.
              Furthermore, I am looking for numerous opportunities which can
              help me to uplift my sphere of knowledge and meanwhile gain work
              experience. Besides that, I love to do a lot of things in my free
              time, like Watching Anime, Web series, Music, Casual Coding and
              spending time with my friends and family.
            </Text>
          </Flex>
        </Flex>

        {/* Intrest and Education */}
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr",
          }}
          w="80vw"
          ml={{ sm: "0", base: "0", md: "0", lg: "3rem" }}
          gap="2vw"
        >
          {/* Interests */}
          <Box w="full">
            <BlockHead>My Interests</BlockHead>
            <Flex
              w="100%"
              borderRadius="md"
              bg="primaryBlack.200"
              p="1rem"
              mt="1"
              direction="column"
              align="center"
            >
              <TextIcon children="Coding" icon={FaCode} />
              <TextIcon children="Music" icon={FaMusic} />
              <TextIcon children="Gaming" icon={FaGamepad} />
              <TextIcon children="Cycling" icon={BiCycling} />
            </Flex>
          </Box>

          {/* Education */}
          <Box w="full">
            <BlockHead> Education</BlockHead>
            <Flex
              w="100%"
              borderRadius="md"
              bg="primaryBlack.200"
              p="1rem"
              mt="1"
              direction="column"
              align="center"
            >
              <TextIcon
                children="Bachelor in Computer Science(Mumbai University)"
                icon={FaArrowRight}
              />
              <TextIcon
                children="Full Stack Javascript Developer (RST Forum)"
                icon={FaArrowRight}
              />
              <TextIcon
                children="12th Grade(S.N.G college)"
                icon={FaArrowRight}
              />
              <TextIcon
                children="10th Grade(V.S High School)"
                icon={FaArrowRight}
              />
            </Flex>
          </Box>
        </Grid>

        {/* Skill Section */}
        <Box
          w="80vw"
          ml={{ sm: "0", md: "0", base: "0", lg: "3rem" }}
          mb="10rem"
        >
          <BlockHead w="80vw">Skills</BlockHead>
          <Grid
            templateColumns={{
              lg: "repeat(4, 1fr)",
              md: "repeat(4, 1fr)",
              sm: "repeat(2, 1fr)",
              base: "repeat(2,1fr)",
            }}
            w="80vw"
            bg="primaryBlack.200"
            mt="1"
            p="6"
          >
            <SkillIcon icon={FaHtml5} title="HTML 5" />
            <SkillIcon icon={FaCss3} title="CSS 3" />
            <SkillIcon icon={IoLogoJavascript} title="JavaScript" />
            <SkillIcon icon={FaReact} title="React" />
            <SkillIcon icon={IoLogoNodejs} title="Nodejs and Express" />
            <SkillIcon icon={FaGitAlt} title="Git" />
            <SkillIcon icon={SiRedux} title="Redux" />
            <SkillIcon icon={SiMongodb} title="MongoDB" />
            <SkillIcon icon={SiDart} title="Dart" />
            <SkillIcon icon={SiMaterialdesign} title="Material UI" />
            <SkillIcon icon={SiFlutter} title="Flutter" />
            <SkillIcon icon={SiReactivex} title="React Native" />
          </Grid>
        </Box>
      </Flex>
    </>
  );
};

export default AboutScreen;
