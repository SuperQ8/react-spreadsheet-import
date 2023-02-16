import type XLSX from "xlsx"
import { Box, Center, Heading, HStack, Link, ModalBody, Text, useStyleConfig } from "@chakra-ui/react"
import { DropZone } from "./components/DropZone"
import { useRsi } from "../../hooks/useRsi"
import { ExampleTable } from "./components/ExampleTable"
import { useCallback, useState } from "react"
import { FadingOverlay } from "./components/FadingOverlay"
import type { themeOverrides } from "../../theme"

type UploadProps = {
  onContinue: (data: XLSX.WorkBook) => Promise<void>
  onDownload: (filetype: string) => Promise<void>
  fileType: string
}

export const UploadStep = ({ onContinue, onDownload, fileType }: UploadProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const styles = useStyleConfig("UploadStep") as typeof themeOverrides["components"]["UploadStep"]["baseStyle"]
  const { translations, fields } = useRsi()
  const handleOnContinue = useCallback(
    async (data) => {
      setIsLoading(true)
      await onContinue(data)
      setIsLoading(false)
    },
    [onContinue],
  )
  return (
    <ModalBody
      w={styles.body.width}
      mx={styles.body.mx}
      paddingInlineStart={styles.body.px}
      paddingInlineEnd={styles.body.px}
    >
      <Heading sx={styles.heading}>{translations.uploadStep.title}</Heading>
      <Text sx={styles.title}>{translations.uploadStep.manifestTitle}</Text>
      <Text sx={styles.subtitle}>{translations.uploadStep.manifestDescription}</Text>
      <Center>
        <DropZone onContinue={handleOnContinue} isLoading={isLoading} />
      </Center>
      <Center mt={4}>
        <Link sx={styles.downloadLink} onClick={() => onDownload(fileType)}>
          Download the {fileType} template
        </Link>
      </Center>
    </ModalBody>
  )
}
