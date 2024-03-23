function addSpacesToCamelCase(input) {
    // Use regular expression to insert spaces between camel case words
    return input.replace(/([a-z])([A-Z])/g, '$1 $2');
  }

  function capitalizeWords(input) {
    // Split the string into words
    const words = input.split(/\s+/);
    
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    
    // Join the capitalized words back together
    return capitalizedWords.join(' ');
  }

export {
    addSpacesToCamelCase,
    capitalizeWords
};