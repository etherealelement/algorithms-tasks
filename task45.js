const findDuplicate = (emails = [
  'lyhxr@example.com',
  'lyhxr@example.com',
  'masha@example.com',
  'fedya@example.com',
  'katya@example.com',
  'fedya@example.com',
  'katya@example.com',
  'lyhxr@example.com',
]) => {
  return Array.from(new Set(emails));

}

console.log(findDuplicate())

