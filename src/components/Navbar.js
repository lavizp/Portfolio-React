import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from './icons/MenuIcon'
import { useMediaQuery } from '@chakra-ui/react'
const Navbar = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
  return (
    <Box position="absolute" top={0} display="flex" flexDir="column" alignItems="center" justifyContent="space-between" paddingX="72px"  width="100%" >
    <Box  display="flex" alignItems="center" justifyContent="space-between"  width="100%" >
        
        <Box>LOGO</Box>
        { isMobile? <Box paddingY="24px">
            <MenuIcon height={20} width={20}/>
        </Box>:
        <Box display="flex" justifyContent="center">
            <Box display="flex" justifyContent="center" alignItems="center" padding="32px 24px">
                <Link to="/experience">
                    <Text>Experience</Text>
                </Link>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" padding="32px 24px">
                <Link to="/experience">
                    <Text>Work</Text>
                </Link>
            </Box><Box display="flex" justifyContent="center" alignItems="center" padding="32px 24px">
                <Link to="/experience">
                    <Text>Photography</Text>
                </Link>
            </Box><Box display="flex" justifyContent="center" alignItems="center" padding="32px 24px" bg="primary">
                <Link to="/experience">
                    <Text>Contact</Text>
                </Link>
            </Box>



        </Box>
        }

</Box>
{isMobile && 
    <Box display="flex" flexDir="column">
    </Box>
    }
    </Box>
  )
}

export default Navbar