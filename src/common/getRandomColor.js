const colors = {
  1: "#0d6efd",
  2: "#6610f2",
  3: "#6f42c1",
  4: "#d63384",
  5: "#dc3545",
  6: "#fd7e14",
  7: "#198754",
  8: "#0dcaf0",
};

const getRandomColor = () => {
  const numberRandom = Math.floor(Math.random() * 8 + 1);
  let myColor = colors[numberRandom];
  return myColor;
};

export default getRandomColor;
