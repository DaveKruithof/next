/**
 * Replaces snake casing structures in objects with lower camel casing
 *
 * @param {any} variable variable you want to format
 * @returns {any}
 */
export default function snakeToLowerCamelCase(variable) {
  // if variable is not an object there is no need for formatting
  if (typeof variable !== "object") return variable;

  // if variable is an array format the content of the array
  if (Array.isArray(variable)) {
    return variable.map((v) => snakeToLowerCamelCase(v));
  }

  // if variable is an object start transforming its possible
  // snake casing keys into lower camel casing keys
  const obj = {};

  for (const key in variable) {
    // if the key does not have an _ its safe to assume its not in snake case
    // TODO: would be nice to transform other types of casings into lower camel casing
    if (!key.includes("_")) {
      obj[key] = snakeToLowerCamelCase(variable[key]);
      continue;
    }

    const formattedKey = key
      .toLowerCase()
      .split("_")
      .map((keyPart, index) => {
        // first part doesn't need any formatting
        if (index === 0) return keyPart;

        // capitizalize first character and add the rest of the string
        return keyPart[0].toUpperCase() + keyPart.slice(1);
      })
      .join("");

    // set formatted key in the newly formatted variable
    obj[formattedKey] = snakeToLowerCamelCase(variable[key]);
  }

  return obj;
}
