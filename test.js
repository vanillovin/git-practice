export const getName = name => {
  if (!name) throw new Error('name is required');
  return name;
};