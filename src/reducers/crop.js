export const cropState = (state = {}, action) => {
  switch (action.type) {
    case 'CROP':
      return { ...state, crop: { ...action.crop } }
    case 'MODAL_DIALOG_CROP':
      return { ...state, modalOpenDialogCrop: !state.modalOpenDialogCrop }

    default:
      return state
  }
}
