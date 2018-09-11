const cropActionsConst = {
  CROP: 'CROP',
  MODAL_DIALOG_CROP: 'MODAL_DIALOG_CROP'
}

export const cropActions = {
  crop: obj => ({
    type: cropActionsConst.CROP,
    crop: obj
  }),
  modalOpenDialogCrop: () => ({
    type: cropActionsConst.MODAL_DIALOG_CROP
  })
}
