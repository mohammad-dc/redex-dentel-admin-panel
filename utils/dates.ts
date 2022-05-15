export const getYears = () => {
  const start_with_year = 2022;
  const current_year = new Date().getFullYear();

  const years_length = current_year - start_with_year;
  const years = [];
  for (let i = 0; i <= years_length; i++) {
    years.push({ key: `${start_with_year + i}`, value: start_with_year + i });
  }
  return years;
};

export const getMonths = () => {
  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push({ key: `${i}`, value: i });
  }
  return months;
};

export const getDays = () => {
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push({ key: `${i}`, value: i });
  }
  return days;
};
