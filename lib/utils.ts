export const sum = (a: number, b: number) => a + b;

export const generatePassword = (
  length: number,
  includeDigits: boolean = true,
  includeSymbols: boolean = true
): string => {
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}\\|;:'\",.<>/?";

  let allowedChars = lowercaseLetters + uppercaseLetters;
  if (includeDigits) {
    allowedChars += digits;
  }
  if (includeSymbols) {
    allowedChars += symbols;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
};
