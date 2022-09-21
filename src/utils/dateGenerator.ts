export const DateGenerator = () => {
  let day = String(new Date().getDate());
  let month = String(new Date().getMonth());
  let year = String(new Date().getFullYear());

  if (Number(day) < 10) {
    day = `0${day}`;
  }

  if (Number(month) < 10) {
    month = `0${month}`;
  }

  if (Number(year) < 10) {
    year = `0${year}`;
  }

  return `${day}/${month}/${year}`;
};
