/* eslint no-use-before-define: 0 */

import { StepsStyleConfig } from "chakra-ui-steps"
import { darken } from "@chakra-ui/theme-tools"
import type { CSSObject } from "@chakra-ui/react"
import type { DeepPartial } from "ts-essentials"
import type { ChakraStylesConfig } from "chakra-react-select"
import type { SelectOption } from "./types"

type CSSObjectWithActiveStep = CSSObject & { _activeStep: CSSObject }

const primeColor = "#C12E49"
export const primeBackground = "#F7F7F8"
const stepIconColor = "#D6D8DA"
const stepActiveIconColor = "#1F78AD"

const StepsTheme: typeof StepsStyleConfig = {
  ...StepsStyleConfig,
  baseStyle: (props: any) => {
    return {
      ...StepsStyleConfig.baseStyle(props),
      connector: {
        ...StepsStyleConfig.baseStyle(props).connector,
        borderColor: "background",
      },
      label: {
        ...StepsStyleConfig.baseStyle(props).label,
        color: "textColor",
      },
      stepIconContainer: {
        ...StepsStyleConfig.baseStyle(props).stepIconContainer,
        bg: stepIconColor,
        borderColor: stepIconColor,
        _activeStep: {
          ...(StepsStyleConfig.baseStyle(props).stepIconContainer! as CSSObjectWithActiveStep)._activeStep,
          bg: stepActiveIconColor,
          borderColor: stepActiveIconColor,
        },
      },
    }
  },
  // prettier-ignore
  sizes: {
    sm: {
      stepIconContainer: {
        width: "24px",
        height: "24px",
        borderWidth: "0",
      },      
      label: {
          fontWeight: "600",
          textAlign: "center",
          fontSize: "16",
      },
      icon: {
        width: "24px",
        height: "24px",
      },
      description: {
        fontWeight: "600",
        textAlign: "center",
        fontSize: "16",
      },
    },
    md: {
      stepIconContainer: {
        width: "24px",
        height: "24px",
        borderWidth: "0",
      },
      label: {
          fontWeight: "600",
          textAlign: "center",
          fontSize: "16",
      },
      icon: {
        width: "24px",
        height: "24px",
      },
      description: {
        fontWeight: "600",
        textAlign: "center",
        fontSize: "16",
      },
    },
    lg: {
      stepIconContainer: {
        width: "24px",
        height: "24px",
        borderWidth: "0",
      },
      label: {
          fontWeight: "600",
          textAlign: "center",
          fontSize: "16",
      },
      icon: {
        width: "24px",
        height: "24px",
      },
      description: {
        fontWeight: "600",
        textAlign: "center",
        fontSize: "16",
      },
    },    
  },
}

const MatchIconTheme: any = {
  baseStyle: (props: any) => {
    return {
      ...StepsStyleConfig.baseStyle(props).stepIconContainer,
      borderWidth: "2px",
      bg: "background",
      borderColor: "yellow.500",
      color: "background",
      transitionDuration: "ultra-fast",
    }
  },
  defaultProps: {
    size: "md",
    colorScheme: "green",
  },
}

export const themeOverrides = {
  colors: {
    textColor: "#2D3748",
    subtitleColor: "#718096",
    inactiveColor: "#A0AEC0",
    border: "#E2E8F0",
    background: primeBackground,
    backgroundAlpha: "rgba(255,255,255,0)",
    secondaryBackground: "#EDF2F7",
    highlight: "#E2E8F0",
    rsi: {
      50: "#E6E6FF",
      100: "#C4C6FF",
      200: "#A2A5FC",
      300: "#8888FC",
      400: "#7069FA",
      500: "#5D55FA",
      600: "#4D3DF7",
      700: "#3525E6",
      800: "#1D0EBE",
      900: "#0C008C",
    },
  },
  shadows: {
    outline: 0,
  },
  components: {
    UploadStep: {
      baseStyle: {
        body: {
          width: "1200px",
          mx: "auto",
          px: 0,
        },
        heading: {
          fontSize: "3xl",
          color: "textColor",
          mb: "1rem",
        },
        title: {
          fontSize: "2xl",
          lineHeight: 8,
          fontWeight: "semibold",
          color: "textColor",
        },
        subtitle: {
          fontSize: "md",
          lineHeight: 6,
          color: "subtitleColor",
          mb: "1rem",
        },
        tableWrapper: {
          mb: "0.5rem",
          position: "relative",
          h: "72px",
        },
        dropzoneTitle: {
          size: "lg",
          fontSize: "16px",
          lineHeight: 7,
          fontWeight: "semibold",
          color: "textColor",
        },
        dropzoneSubTitle: {
          size: "md",
          fontSize: "14px",
          lineHeight: 7,
          fontWeight: "semibold",
          color: "textColor",
        },
        downloadLink: {
          size: "md",
          fontSize: "14px",
          lineHeight: 7,
          fontWeight: "semibold",
          color: primeColor,
        },
        dropZoneBorder: "rsi.500",
        dropzoneButton: {
          mb: "32px",
          bg: primeColor,
          width: "686px",
          height: "56px",
        },
      },
    },
    SelectSheetStep: {
      baseStyle: {
        heading: {
          fontSize: "3xl",
          color: "textColor",
          mb: "1rem",
        },
        title: {
          fontSize: "2xl",
          lineHeight: 8,
          fontWeight: "semibold",
          color: "textColor",
        },
        subtitle: {
          fontSize: "md",
          lineHeight: 6,
          color: "subtitleColor",
          mb: "1rem",
        },
        radio: {},
        radioLabel: {
          color: "textColor",
        },
      },
    },
    SelectHeaderStep: {
      baseStyle: {
        body: {
          width: "1200px",
          mx: "auto",
          px: 0,
        },
        heading: {
          fontSize: "3xl",
          color: "textColor",
          mb: "1rem",
        },
        title: {
          fontSize: "2xl",
          lineHeight: 8,
          fontWeight: "semibold",
          color: "textColor",
        },
        subtitle: {
          fontSize: "md",
          lineHeight: 6,
          color: "subtitleColor",
          mb: "1rem",
        },
        modalFooter: {
          background: primeBackground,
        },
      },
    },
    MatchColumnsStep: {
      baseStyle: {
        body: {
          width: "1200px",
          mx: "auto",
          px: 0,
        },
        heading: {
          fontSize: "3xl",
          color: "textColor",
          mb: "1rem",
        },
        title: {
          fontSize: "2xl",
          lineHeight: 8,
          fontWeight: "semibold",
          color: "textColor",
        },
        subtitle: {
          fontSize: "md",
          lineHeight: 6,
          color: "subtitleColor",
          mb: "1rem",
        },
        userTable: {
          header: {
            paddingLeft: "10px",
            fontSize: "xs",
            lineHeight: 4,
            fontWeight: "bold",
            letterSpacing: "wider",
            color: "textColor",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            ["&[data-ignored]"]: {
              color: "inactiveColor",
            },
          },
          cell: {
            fontSize: "sm",
            lineHeight: 5,
            fontWeight: "medium",
            color: "textColor",
            px: 6,
            py: 4,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            ["&[data-ignored]"]: {
              color: "inactiveColor",
            },
          },
          ignoreButton: {
            size: "xs",
            colorScheme: "gray",
            color: "textColor",
          },
        },
        selectColumn: {
          text: {
            fontSize: "sm",
            lineHeight: 5,
            fontWeight: "normal",
            color: "inactiveColor",
            px: 4,
          },
          accordionLabel: {
            color: "blue.600",
            fontSize: "sm",
            lineHeight: 5,
            pl: 1,
          },
          selectLabel: {
            pt: "0.375rem",
            pb: 2,
            fontSize: "md",
            lineHeight: 6,
            fontWeight: "medium",
            color: "textColor",
          },
        },
        select: {
          dropdownIndicator: (provided) => ({
            ...provided,
            background: "none",
            border: "none",
            p: 0,
            w: "40px",
            color: "textColor",
          }),
          control: (provided) => ({
            ...provided,
            background: "none",
            borderRadius: "6px",
            p: 0,
            // _focus, _hover, _invalid, _readonly pseudoselectors can be used here for alternate border colors
            _focus: undefined,
          }),
          input: (provided) => ({
            ...provided,
            background: "none",
            border: "none",
            p: 0,
          }),
          indicatorSeparator: (provided) => ({
            ...provided,
            opacity: 0,
          }),
          singleValue: (provided) => ({
            ...provided,
            ml: 0,
            mr: 0,
          }),
          placeholder: (provided) => ({
            ...provided,
            color: "inactiveColor",
          }),
          valueContainer: (provided) => ({
            ...provided,
            color: "textColor",
          }),
          menu: (provided) => ({
            ...provided,
            p: 0,
            mt: 0,
          }),
          menuList: (provided) => ({
            ...provided,
            bg: "background",
            minW: "initial",
          }),
          option: (provided, state) => ({
            ...provided,
            color: "textColor",
            bg: state.isSelected || state.isFocused ? "highlight" : provided.bg,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
            whiteSpace: "nowrap",
            _hover: {
              bg: "highlight",
            },
          }),
        } as ChakraStylesConfig<SelectOption>,
      },
    },
    ValidationStep: {
      baseStyle: {
        body: {
          width: "1200px",
          mx: "auto",
          px: 0,
        },
        heading: {
          fontSize: "3xl",
          color: "textColor",
          mb: "1rem",
        },
        title: {
          fontSize: "2xl",
          lineHeight: 8,
          fontWeight: "semibold",
          color: "textColor",
        },
        subtitle: {
          fontSize: "md",
          lineHeight: 6,
          color: "subtitleColor",
          mb: "1rem",
        },
        select: {
          dropdownIndicator: (provided) => ({
            ...provided,
            background: "none",
            border: "none",
            p: 0,
            w: "40px",
          }),
          control: (provided) => ({
            ...provided,
            background: "none",
            border: "none",
            p: 0,
            _focus: undefined,
          }),
          input: (provided) => ({
            ...provided,
            background: "none",
            border: "none",
            p: 0,
          }),
          indicatorSeparator: (provided) => ({
            ...provided,
            opacity: 0,
          }),
          singleValue: (provided) => ({
            ...provided,
            marginInlineStart: 0,
          }),
          valueContainer: (provided) => ({
            ...provided,
            p: 0,
            paddingInlineStart: 2,
            color: "gray.400",
          }),
          menu: (provided) => ({
            ...provided,
            p: 0,
            mt: 0,
          }),
          menuList: (provided) => ({
            ...provided,
            minW: "initial",
          }),
          option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? "gray.900" : provided.color,
            bg: state.isSelected || state.isFocused ? "secondaryBackground" : provided.bg,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
            whiteSpace: "nowrap",
          }),
        } as ChakraStylesConfig<SelectOption>,
        delBtn: {
          background: primeBackground,
          color: primeColor,
        },
      },
    },
    MatchIcon: MatchIconTheme,
    Steps: StepsTheme,
    Modal: {
      baseStyle: {
        dialog: {
          borderRadius: "lg",
          bg: "background",
          fontSize: "lg",
          color: "textColor",
        },
      },
      variants: {
        rsi: {
          header: {
            bg: "secondaryBackground",
            px: "2rem",
            py: "1.5rem",
          },
          body: {
            bg: "background",
            display: "flex",
            paddingX: "2rem",
            paddingY: "2rem",
            flexDirection: "column",
            flex: 1,
            overflow: "auto",
            height: "100%",
          },
          footer: {
            bg: "secondaryBackground",
            py: "1.5rem",
            justifyContent: "center",
          },
          dialog: {
            outline: "unset",
            minH: "calc(100vh - 4rem)",
            maxW: "calc(100vw - 4rem)",
            my: "2rem",
            borderRadius: "3xl",
            overflow: "hidden",
          },
        },
      },
    },
    Button: {
      defaultProps: {
        colorScheme: "rsi",
      },
    },
  },
  styles: {
    global: {
      ".rdg": {
        contain: "size layout style paint",
        borderRadius: "lg",
        borderTop: "1px solid var(--rdg-border-color)",
        blockSize: "100%",
        border: "none",

        // we have to use vars here because chakra does not autotransform unknown props
        "--rdg-row-height": "35px",
        "--rdg-color": "var(--chakra-colors-textColor)",
        "--rdg-background-color": "var(--chakra-colors-background)",
        "--rdg-header-background-color": "var(--chakra-colors-background)",
        "--rdg-row-hover-background-color": "var(--chakra-colors-background)",
        "--rdg-selection-color": "var(--chakra-colors-blue-400)",
        "--rdg-row-selected-background-color": "var(--chakra-colors-rsi-50)",
        "--row-selected-hover-background-color": "var(--chakra-colors-rsi-100)",
        "--rdg-error-cell-background-color": "var(--chakra-colors-red-50)",
        "--rdg-warning-cell-background-color": "var(--chakra-colors-orange-50)",
        "--rdg-info-cell-background-color": "var(--chakra-colors-blue-50)",
        "--rdg-border-color": "var(--chakra-colors-border)",
        "--rdg-frozen-cell-box-shadow": "none",
        "--rdg-font-size": "var(--chakra-fontSizes-sm)",
      },
      ".rdg-row,.rdg-header-row": {
        backgroundColor: "white",
      },
      ".rdg-header-row .rdg-cell": {
        color: "textColor",
        fontSize: "xs",
        lineHeight: 10,
        fontWeight: "bold",
        letterSpacing: "wider",
        textTransform: "uppercase",
        "&:first-of-type": {
          borderTopLeftRadius: "lg",
        },
        "&:last-child": {
          borderTopRightRadius: "lg",
        },
      },
      ".rdg-row:last-child .rdg-cell:first-of-type": {
        borderBottomLeftRadius: "lg",
      },
      ".rdg-row:last-child .rdg-cell:last-child": {
        borderBottomRightRadius: "lg",
      },
      ".rdg[dir='rtl']": {
        ".rdg-row:last-child .rdg-cell:first-of-type": {
          borderBottomRightRadius: "lg",
          borderBottomLeftRadius: "none",
        },
        ".rdg-row:last-child .rdg-cell:last-child": {
          borderBottomLeftRadius: "lg",
          borderBottomRightRadius: "none",
        },
      },
      ".rdg-cell": {
        contain: "size layout style paint",
        borderRight: "none",
        borderInlineEnd: "none",
        borderBottom: "1px solid var(--rdg-border-color)",
        borderColor: "white",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        "&[aria-selected='true']": {
          boxShadow: "inset 0 0 0 1px var(--rdg-selection-color)",
        },
        "&:first-of-type": {
          borderInlineStart: "1px solid var(--rdg-border-color)",
        },
        "&:last-child": {
          borderInlineEnd: "1px solid var(--rdg-border-color)",
        },
      },
      ".rdg-cell-error": {
        backgroundColor: "var(--rdg-error-cell-background-color)",
      },
      ".rdg-cell-warning": {
        backgroundColor: "var(--rdg-warning-cell-background-color)",
      },
      ".rdg-cell-info": {
        backgroundColor: "var(--rdg-info-cell-background-color)",
      },
      ".rdg-static": {
        cursor: "pointer",
      },
      ".rdg-static .rdg-header-row": {
        display: "none",
      },
      ".rdg-static .rdg-cell": {
        "--rdg-selection-color": "none",
      },
      ".rdg-example .rdg-cell": {
        "--rdg-selection-color": "none",
        borderBottom: "none",
      },

      ".rdg-radio": {
        display: "flex",
        alignItems: "center",
      },
      ".rdg-checkbox": {
        "--rdg-selection-color": "none",
        display: "flex",
        alignItems: "center",
      },
    },
  },
} as const

export const rtlThemeSupport = {
  components: {
    Modal: {
      baseStyle: {
        dialog: {
          direction: "rtl",
        },
      },
    },
  },
} as const

export type CustomTheme = DeepPartial<typeof themeOverrides>
