const formatDate = (date: Date): string => {
  const dateObj = new Date(date);
  return Intl.DateTimeFormat('pt-BR').format(dateObj);
};

export default formatDate;
