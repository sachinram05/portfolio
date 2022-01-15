import { Grid, Flex } from "@chakra-ui/react";
import LargeBox from "../components/LargeBox";
import { Header } from "../components/TitleHeader";
import { PageAnimation } from "../components/PageAnimations";

const BlogScreen = () => {
  return (
    <>
      <PageAnimation color="blue.700" />
      <Header children="My Blogs(Comming Soon!)" />
      <Flex
        align="center"
        w="100%"
        justifyContent="center"
        mt="2rem"
        mb="10rem"
      >
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          }}
          ml={{ sm: "0", md: "0", base: "0", lg: "3rem" }}
          w="80vw"
          gap="1rem"
        >
          <LargeBox />
          <LargeBox />
          <LargeBox />
          <LargeBox />
          <LargeBox />
          <LargeBox />
        </Grid>
      </Flex>
    </>
  );
};

export default BlogScreen;
