export default () => {
  const truncate = (str: string, n: number) => {
    return (str.length > n) ? str.slice(0, n-1) + ' ...' : str;
  };

  const formatDate = (date: string) => {
    return date.split("-").reverse().join("/");
  }

  const getImage = (path: string) => {    
    if (!path) return "https://placehold.co/500?text=Not found"
    return `https://image.tmdb.org/t/p/original${path}`
  }

  const getYear = (date: string) => {
    return date.split("-")[0]
  }

  return {
    truncate,
    formatDate,
    getImage,
    getYear
  }
}