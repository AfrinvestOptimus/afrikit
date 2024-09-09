const getInitials = (input: string = '', num: number = 1): string => {
  // Ensure input is a string and trim whitespace
  if (!input || typeof input !== 'string') {
    return '' // Handle empty or invalid input
  }

  // Split the input into words, filter out empty strings, and check for more than 2 words
  const words = input.trim().split(/\s+/).filter(Boolean)

  // If input is exactly 2 characters, return them as uppercase
  if (input.length === 2 && words.length === 1) {
    return input.toUpperCase()
  }

  // Handle single or two-word inputs
  let result = ''

  // For a single word, take only the first letter
  if (words.length === 1 && num === 1) {
    result = words[0][0].toUpperCase()
  }

  if (words.length === 1 && num === 2) {
    result = words[0][0].toUpperCase() + words[0][1].toUpperCase()
  }

  // For two words, take the first letter of each word
  if (words.length === 2) {
    result = words[0][0].toUpperCase() + words[1][0].toUpperCase()
  }

  //  For three or more words, take the first and second letter of the first two words
  if (words.length > 2) {
    result = words[0][0].toUpperCase() + words[1][0].toUpperCase()
  }

  return result
}

export default getInitials
