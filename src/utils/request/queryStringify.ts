export const queryStringify = (obj: object): string => {
  let pairs: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    pairs.push(`${key}=${value}`);
  }

  return pairs.join("&");
};
