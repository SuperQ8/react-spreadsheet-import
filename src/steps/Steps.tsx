import { UploadFlow } from "./UploadFlow"
import { ModalHeader } from "@chakra-ui/react"
import { useSteps, Step, Steps as Stepper } from "chakra-ui-steps"
import { CgCheck } from "react-icons/cg"
import { useRsi } from "../hooks/useRsi"
import { primeBackground } from "../theme"

const CheckIcon = ({ color }: { color: string }) => <CgCheck size="1rem" color={color} />

const steps = ["uploadStep", "selectHeaderStep", "matchColumnsStep", "validationStep"] as const

interface Props {
  onDownload: (filetype: string) => Promise<void>
  fileType: string
}

export const Steps = ({ onDownload, fileType }: Props) => {
  const { translations } = useRsi()
  const { nextStep, activeStep } = useSteps({
    initialStep: 0,
  })

  return (
    <>
      <ModalHeader
        w={1200}
        mx="auto"
        display={["none", "none", "block"]}
        bg={primeBackground}
        paddingInlineEnd={0}
        paddingInlineStart={0}
      >
        <Stepper activeStep={activeStep} checkIcon={CheckIcon} labelOrientation="vertical">
          {steps.map((key) => (
            <Step label={translations[key].title} key={key} />
          ))}
        </Stepper>
      </ModalHeader>
      <UploadFlow nextStep={nextStep} onDownload={onDownload} fileType={fileType} />
    </>
  )
}
