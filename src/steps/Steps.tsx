import { UploadFlow } from "./UploadFlow"
import { ModalHeader } from "@chakra-ui/react"
import { useSteps, Step, Steps as Stepper } from "chakra-ui-steps"
import { CgCheck } from "react-icons/cg"
import { useRsi } from "../hooks/useRsi"

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
      <ModalHeader display={["none", "none", "block"]}>
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
