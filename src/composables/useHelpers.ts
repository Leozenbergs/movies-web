export default () => {
  const truncate = (str: string, n: number) => {
    return (str.length > n) ? str.slice(0, n-1) + ' ...' : str;
  };

  const formatDate = (date: string) => {
    return date.split("-").reverse().join("/");
  } 

  return {
    truncate,
    formatDate
  }
}