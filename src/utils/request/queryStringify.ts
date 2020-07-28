export const queryStringify = (obj: object): string => {
  let params = new URLSearchParams();
  let pairs: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    params.append(key, value);
  }

  return params.toString();
};
