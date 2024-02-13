function compareVersions(versions1, version2) {
  const v1 = version1.split('.').map(Number);
  const v2 = version2.split('.').map(Number);
  
  const maxLength = Math.max(v1.length, v2.length);
  
  for (let i = 0; i < maxLength; i++) {
    const revision1 = i < v1.length ? v1[i] : 0;
    const revision2 = i < v2.length ? v2[i] : 0;
    
    if (revision1 < revision2) {
      return -1;
    } else if (revision1 > revision2) {
      return 1;
    }
  }
  
  return 0;
}


// Пример использования
const result = compareVersions("1.0.2", "1.0.10");
console.log(result); // Выведет: -1, так как "1.0.2" меньше, чем "1.0.10"