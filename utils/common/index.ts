type Attributes = {[key: string]: string | undefined | number | boolean};

export const removeUndefinedAttributes = (value: Attributes): Attributes => {
  const stringifiedJson = JSON.stringify(value);
  return JSON.parse(stringifiedJson);
};

export const getRandomString = (bytes: number): string =>
  Math.random().toString(bytes).substring(2, 15) +
  Math.random().toString(bytes).substring(2, 15);

export const replaceAllDuplicateLineBreaks = (sentence: string): string => {
  return sentence.replace(/\\n/g, '\n');
};
