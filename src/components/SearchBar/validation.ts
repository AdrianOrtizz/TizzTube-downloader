export const validate = (URL: string): string => {
  let error = "";
  const URLRegex =
    /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})(&\S*)?$/;

  if (!URLRegex.test(URL)) error = "URL no válida";
  if (!URL) error = "No se ha introducido ninguna URL";

  return error;
};
