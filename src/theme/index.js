import { extendTheme } from "@chakra-ui/react"
import { mergeWith } from '@chakra-ui/utils';

// 2. Call `extendTheme` and pass your custom values

export function makeTheme(overrides) {
    const theme = extendTheme({
        ...extendedTheme,
    });
    return mergeWith(theme, overrides);
}
const extendedTheme = extendTheme({
    styles: {
        global: () => ({
          body: {
            bg: "#000000",
            color: "#FFFFFF"
          },
        }),
      },
    components: {

        Text:{
            baseStyle: {
                fontFamily: 'Sen',
            },
        }
    },
  colors: {
    base: "#000000",
    level1: "#181823",
    lightGrey:"#DEECF9",
    darkGrey: "#C7E0F4",
    text:"#FFFFFF",
    primary:"#5221E6",
    green:"#3CC74E",
    pink:"#E95D90",
    peach:"#FFF3E4",
    violet:"#FBE4FF"

  },
})
export const theme = makeTheme();

export default theme