type Attributes = { [key: string]: string | undefined | number | boolean };

export const removeUndefinedAttributes = (value: Attributes): Attributes => {
  const stringifiedJson = JSON.stringify(value);
  return JSON.parse(stringifiedJson);
};
