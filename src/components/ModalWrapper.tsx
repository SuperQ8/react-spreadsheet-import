import type React from "react"
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react"
import { ModalCloseButton } from "./ModalCloseButton"
import { useRsi } from "../hooks/useRsi"

type Props = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

export const ModalWrapper = ({ children, isOpen, onClose }: Props) => {
  const { rtl } = useRsi()
  return (
    <Modal
      size="full"
      isOpen={isOpen}
      onClose={onClose}
      id="rsi"
      variant="rsi"
      closeOnEsc={false}
      closeOnOverlayClick={false}
      scrollBehavior="inside"
    >
      <div dir={rtl ? "rtl" : "ltr"}>
        <ModalOverlay />
        <ModalContent m={0} maxW="100vw" maxH="100vh" borderRadius={0}>
          {children}
        </ModalContent>
      </div>
    </Modal>
  )
}
