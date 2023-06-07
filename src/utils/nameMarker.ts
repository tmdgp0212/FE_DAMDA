export const nameMarker = (name: string) => {
  return name.replace(/(?<=.{1})./gi, '*');
};
