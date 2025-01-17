import type { DeepPartial } from "ts-essentials"

export const translations = {
  uploadStep: {
    title: "Upload file",
    manifestTitle: "Data that we expect:",
    manifestDescription: "(You will have a chance to rename or remove columns in next steps)",
    maxRecordsExceeded: (maxRecords: string) => `Too many records. Up to ${maxRecords} allowed`,
    dropzone: {
      title: "Click here to upload or drag and drop",
      subTitle: ".xlsx, .xls, or .csv file",
      errorToastDescription: "upload rejected",
      activeDropzoneTitle: "Drop file here...",
      buttonTitle: "Select file",
      loadingTitle: "Processing...",
    },
    selectSheet: {
      title: "Select the sheet to use",
      nextButtonTitle: "Next",
    },
  },
  selectHeaderStep: {
    title: "Select header row",
    manifestTitle: "qf select header with some extra line needs to split into new line",
    manifestDescription: "(You will have a chance to rename or remove columns in next steps)",
    nextButtonTitle: "Next",
  },
  matchColumnsStep: {
    title: "Match Columns",
    manifestTitle: "qf match columns:",
    manifestDescription: "(You will have a chance to rename or remove columns in next steps)",
    nextButtonTitle: "Next",
    userTableTitle: "Your table",
    templateTitle: "Will become",
    selectPlaceholder: "Select column...",
    ignoredColumnText: "Column ignored",
    subSelectPlaceholder: "Select...",
    matchDropdownTitle: "Match",
    unmatched: "Unmatched",
    duplicateColumnWarningTitle: "Another column unselected",
    duplicateColumnWarningDescription: "Columns cannot duplicate",
  },
  validationStep: {
    title: "Validate data",
    manifestTitle: "qf validation:",
    manifestDescription: "(You will have a chance to rename or remove columns in next steps)",
    nextButtonTitle: "Submit",
    noRowsMessage: "No data found",
    noRowsMessageWhenFiltered: "No data containing errors",
    discardButtonTitle: "Discard selections",
    filterSwitchTitle: "Show only rows with errors",
  },
  alerts: {
    confirmClose: {
      headerTitle: "Exit import flow",
      bodyText: "Are you sure? Your current information will not be saved.",
      cancelButtonTitle: "Cancel",
      exitButtonTitle: "Exit flow",
    },
    submitIncomplete: {
      headerTitle: "Errors detected",
      bodyText: "There are still some rows that contain errors. Rows with errors will be ignored when submitting.",
      bodyTextSubmitForbidden: "There are still some rows containing errors.",
      cancelButtonTitle: "Cancel",
      finishButtonTitle: "Submit",
    },
    unmatchedRequiredFields: {
      headerTitle: "Not all columns matched",
      bodyText: "There are required columns that are not matched or ignored. Please finish the matching",
      listTitle: "Columns not matched:",
      cancelButtonTitle: "Cancel",
      continueButtonTitle: "Continue",
    },
    toast: {
      error: "Error",
    },
  },
}

export type TranslationsRSIProps = DeepPartial<typeof translations>
export type Translations = typeof translations
