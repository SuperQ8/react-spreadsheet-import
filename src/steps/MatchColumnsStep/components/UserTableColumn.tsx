import { Box, Center, Flex, IconButton, Text, useStyleConfig } from "@chakra-ui/react"
import { CgUndo } from "react-icons/cg"
import { RiDeleteBin5Fill } from "react-icons/ri"
import type { Column } from "../MatchColumnsStep"
import { ColumnType } from "../MatchColumnsStep"
import { dataAttr } from "@chakra-ui/utils"
import type { Styles } from "./ColumnGrid"
import type { RawData } from "../../../types"

type UserTableColumnProps<T extends string> = {
  column: Column<T>
  entries: RawData
  onIgnore: (index: number) => void
  onRevertIgnore: (index: number) => void
}

export const UserTableColumn = <T extends string>(props: UserTableColumnProps<T>) => {
  const styles = useStyleConfig("MatchColumnsStep") as Styles
  const {
    column: { header, index, type },
    entries,
    onIgnore,
    onRevertIgnore,
  } = props
  const isIgnored = type === ColumnType.ignored
  return (
    <Box>
      <Flex px={6} alignItems="left" mb={4}>
        {type === ColumnType.ignored ? (
          <IconButton
            aria-label="Ignore column"
            icon={<CgUndo />}
            onClick={() => onRevertIgnore(index)}
            {...styles.userTable.ignoreButton}
          />
        ) : (
          <IconButton
            aria-label="Ignore column"
            icon={<RiDeleteBin5Fill />}
            onClick={() => onIgnore(index)}
            {...styles.userTable.ignoreButton}
          />
        )}
        <Center sx={styles.userTable.header} data-ignored={dataAttr(isIgnored)}>
          {header}
        </Center>
      </Flex>
      {entries.map((entry, index) => (
        <Text key={(entry || "") + index} sx={styles.userTable.cell} data-ignored={dataAttr(isIgnored)}>
          {entry}
        </Text>
      ))}
    </Box>
  )
}
