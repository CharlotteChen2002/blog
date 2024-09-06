export function getCurrentYear() {
  return new Date().getFullYear()
}

export function getCurrentSeason() {
  const month = new Date().getMonth()
  if (month >= 2 && month <= 4)
    return 'Spring'
  if (month >= 5 && month <= 7)
    return 'Summer'
  if (month >= 8 && month <= 10)
    return 'Autumn'
  return 'Winter'
}

export function formatDate(date: string) {
  const d = new Date(date)
  return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`
}
