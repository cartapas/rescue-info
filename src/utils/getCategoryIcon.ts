export const getCategoryIcon = (categoria: string): string => {
  const catLower = categoria.toLowerCase();
  
  if (catLower.includes('desaparecid') || catLower.includes('persona')) return '🚨';
  if (catLower.includes('sangre') || catLower.includes('salud') || catLower.includes('donaci')) return '❤️';
  if (catLower.includes('acopio') || catLower.includes('albergue') || catLower.includes('refugio')) return '🏡';
  if (catLower.includes('mascota') || catLower.includes('animal') || catLower.includes('veterinar')) return '🐾';
  if (catLower.includes('psicolog') || catLower.includes('emocional')) return '🧠';
  if (catLower.includes('estructur') || catLower.includes('ingenier') || catLower.includes('daño')) return '🏗️';
  if (catLower.includes('alquiler') || catLower.includes('vivienda')) return '🔑';
  
  return '📌'; // Ícono por defecto
};