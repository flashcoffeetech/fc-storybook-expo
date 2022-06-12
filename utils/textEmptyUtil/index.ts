export const displayEmptyString = (stringText: string): string => {
  if (stringText === null || !stringText) {
    return '';
  } else {
    return `${stringText} `;
  }
};
