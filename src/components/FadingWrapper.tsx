import { Box } from "@chakra-ui/react"

type FadingWrapperProps = {
  gridColumn: string
  gridRow: string
}

export const FadingWrapper = ({ gridColumn, gridRow }: FadingWrapperProps) => (
  <>
    <Box
      gridColumn={gridColumn}
      gridRow={gridRow}
      borderRadius="1.2rem"
      border="none"
      borderColor="border"
      pointerEvents="none"
      bg="white"
      zIndex={0}
    />
    <Box
      gridColumn={gridColumn}
      gridRow={gridRow}
      pointerEvents="none"
      bgGradient="linear(to bottom, backgroundAlpha, background)"
      zIndex={10}
    />
  </>
)
