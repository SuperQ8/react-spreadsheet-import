import { Box, Button, Text, useStyleConfig, useToast, VStack, Image } from "@chakra-ui/react"
import { useDropzone } from "react-dropzone"
import * as XLSX from "xlsx"
import { useState } from "react"
import { getDropZoneBorder } from "../utils/getDropZoneBorder"
import { useRsi } from "../../../hooks/useRsi"
import { readFileAsync } from "../utils/readFilesAsync"
import type { themeOverrides } from "../../../theme"

type DropZoneProps = {
  onContinue: (data: XLSX.WorkBook) => void
  isLoading: boolean
}

export const DropZone = ({ onContinue, isLoading }: DropZoneProps) => {
  const { translations, maxFileSize, dateFormat, parseRaw } = useRsi()
  const styles = useStyleConfig("UploadStep") as typeof themeOverrides["components"]["UploadStep"]["baseStyle"]
  const toast = useToast()
  const [loading, setLoading] = useState(false)
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    maxSize: maxFileSize,
    accept: ".xls, .csv, .xlsx",
    onDropRejected: (fileRejections) => {
      setLoading(false)
      fileRejections.forEach((fileRejection) => {
        toast({
          status: "error",
          variant: "left-accent",
          position: "bottom-left",
          title: `${fileRejection.file.name} ${translations.uploadStep.dropzone.errorToastDescription}`,
          description: fileRejection.errors[0].message,
          isClosable: true,
        })
      })
    },
    onDrop: async ([file]) => {
      setLoading(true)
      const arrayBuffer = await readFileAsync(file)
      const workbook = XLSX.read(arrayBuffer, { cellDates: true, dateNF: dateFormat, raw: parseRaw })
      setLoading(false)
      onContinue(workbook)
    },
  })

  return (
    <Box
      {...getRootProps()}
      {...getDropZoneBorder(styles.dropZoneBorder)}
      bg="white"
      maxW="750px"
      maxH="384px"
      h="750px"
      w="384px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      flex={1}
    >
      <input {...getInputProps()} data-testid="rsi-dropzone" />
      {isDragActive ? (
        <Text sx={styles.dropzoneTitle}>{translations.uploadStep.dropzone.activeDropzoneTitle}</Text>
      ) : loading || isLoading ? (
        <Text sx={styles.dropzoneTitle}>{translations.uploadStep.dropzone.loadingTitle}</Text>
      ) : (
        <>
          <VStack
            width="686px"
            height="224px"
            alignContent="center"
            justify="center"
            border="1px"
            borderColor="gray.200"
            my={8}
          >
            <Image src="/upload.svg" alt="upload" />
            <Text sx={styles.dropzoneTitle}>{translations.uploadStep.dropzone.title}</Text>
            <Text sx={styles.dropzoneSubTitle}>{translations.uploadStep.dropzone.subTitle}</Text>
          </VStack>
          <Button sx={styles.dropzoneButton} onClick={open}>
            {translations.uploadStep.dropzone.buttonTitle}
          </Button>
        </>
      )}
    </Box>
  )
}
