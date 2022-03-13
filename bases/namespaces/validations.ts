namespace Validation {
  export const validateText = (text: string): boolean => {
    return text.length > 3;
  };

  export const validateDate = (myDate: Date): boolean => {
    return myDate instanceof Date;
  };
}


console.log(Validation.validateText('tes'));