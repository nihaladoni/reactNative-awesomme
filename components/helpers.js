let colors = [
  "#bedbbb",
  "#8db596",
  "#92817a",
  "#fff8c1",
  "#fbf6f0",
  "#aee6e6",
  "#9ad3bc",
  "#f3eac2",
  "#f5b461",
  "#ec524b",
  "#799351",
  "#ffa36c",
  "#f6eec9",
  "#799351",
  "#94b4a4",
  "#d2f5e3",
  "#e5c5b5",
  "#f4d9c6",
  "#7579e7",
  "#9ab3f5",
  "#a3d8f4",
  "#b9fffc",
  "#68b0ab",
  "#8fc0a9",
  "#c8d5b9",
  "#dddddd",
  "#d9adad",
  "#84a9ac",
  "#89c9b8",
];

let getRandomColor = () => {
  let colIndex = Math.floor(Math.random() * 29);
  return colors[colIndex];
};

export default getRandomColor;
