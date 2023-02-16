import type React from "react"
import type { Column, Columns } from "../MatchColumnsStep"
import { Box, Flex, Heading, ModalBody, Text, useStyleConfig } from "@chakra-ui/react"
import { FadingWrapper } from "../../../components/FadingWrapper"
import { ContinueButton } from "../../../components/ContinueButton"
import { useRsi } from "../../../hooks/useRsi"
import type { themeOverrides } from "../../../theme"

type ColumnGridProps<T extends string> = {
  columns: Columns<T>
  userColumn: (column: Column<T>) => React.ReactNode
  templateColumn: (column: Column<T>) => React.ReactNode
  onContinue: (val: Record<string, string>[]) => void
  isLoading: boolean
}

export type Styles = typeof themeOverrides["components"]["MatchColumnsStep"]["baseStyle"]

export const ColumnGrid = <T extends string>({
  columns,
  userColumn,
  templateColumn,
  onContinue,
  isLoading,
}: ColumnGridProps<T>) => {
  const { translations } = useRsi()
  const styles = useStyleConfig("MatchColumnsStep") as Styles

  return (
    <>
      <ModalBody
        flexDir="column"
        py={8}
        overflow="auto"
        w={styles.body.width}
        mx={styles.body.mx}
        paddingInlineStart={styles.body.px}
        paddingInlineEnd={styles.body.px}
      >
        <Heading sx={styles.heading}>{translations.matchColumnsStep.title}</Heading>
        <Text sx={styles.title}>{translations.matchColumnsStep.manifestTitle}</Text>
        <Text sx={styles.subtitle}>{translations.matchColumnsStep.manifestDescription}</Text>
        <Flex
          flex={1}
          display="grid"
          gridTemplateRows="auto auto auto 1fr"
          gridTemplateColumns={`0.75rem repeat(${columns.length}, minmax(18rem, auto)) 0.75rem`}
        >
          <Box gridColumn={`1/${columns.length + 3}`} mb={4}>
            <Text sx={styles.title}>{translations.matchColumnsStep.userTableTitle}</Text>
          </Box>
          {columns.map((column, index) => (
            <Box
              gridRow="2/3"
              gridColumn={`${index + 2}/${index + 3}`}
              pt={3}
              key={column.header + index}
              bg="white"
              zIndex={5}
            >
              {userColumn(column)}
            </Box>
          ))}
          <FadingWrapper gridColumn={`1/${columns.length + 3}`} gridRow="2/3" />
          <Box gridColumn={`1/${columns.length + 3}`} mt={7} mb={4}>
            <Text sx={styles.title}>{translations.matchColumnsStep.templateTitle}</Text>
          </Box>
          {columns.map((column, index) => {
            const lR = index === 0 ? "lg" : "none"
            const rR = index === columns.length - 1 ? "lg" : "none"
            return (
              <Box
                gridRow="4/5"
                gridColumn={`${index + 2}/${index + 3}`}
                key={column.header + index}
                h={20}
                py="1.125rem"
                mx={-2}
                pl={2}
                pr={3}
                bg="white"
                borderLeftRadius={lR}
                borderRightRadius={rR}
              >
                {templateColumn(column)}
              </Box>
            )
          })}
        </Flex>
      </ModalBody>
      <ContinueButton
        isLoading={isLoading}
        onContinue={onContinue}
        title={translations.matchColumnsStep.nextButtonTitle}
      />
    </>
  )
}
