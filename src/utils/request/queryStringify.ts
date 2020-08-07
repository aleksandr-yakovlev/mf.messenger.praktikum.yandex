export const queryStringify = (obj: Record<string, unknown>): string => {
  const params = new URLSearchParams();

  Object.keys(obj).forEach((key) => {
    params.append(key, obj[key].toString());
  });

  return params.toString();
};
