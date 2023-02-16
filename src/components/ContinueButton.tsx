import { Button, ModalFooter } from "@chakra-ui/react"
import { primeBackground } from "../theme"

type ContinueButtonProps = {
  onContinue: (val: any) => void
  title: string
  isLoading?: boolean
}

export const ContinueButton = ({ onContinue, title, isLoading }: ContinueButtonProps) => (
  <ModalFooter bg={primeBackground} pt={12}>
    <Button size="lg" w="21rem" onClick={onContinue} isLoading={isLoading}>
      {title}
    </Button>
  </ModalFooter>
)
