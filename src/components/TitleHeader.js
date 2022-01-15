import { Flex,Icon,Text} from "@chakra-ui/react"
import { FaFeatherAlt } from "react-icons/fa";
import React from "react";


const Header = ({children}) =>{

    return(
        <Flex
        w="full"
        align="center"
        justify="center"
        direction="column"
        mb="2rem"
        mt="6rem"
        h="2rem"
        >
            <Text as="h2" color="white" fontSize="2rem" fontWeight="bold">
                {children}
            </Text>
            <Icon as={FaFeatherAlt} fontSize="2rem" color="primary.100" />
        </Flex>
    )
}




const BlockHead = ({children})=>{
    return(
        <Flex borderRadius="md"  w ="100%" align="center" bg="#070708" p="1rem" mt="2rem">
            <Text as="p" color="white" fontSize="1rem" fontWeight="bold">
                {children}
            </Text>
        </Flex>
    )
}

export { BlockHead, Header};