const getImgURL = (title = ``) => {
  return `img/${title
                .split(` `)
                .map((item) => item.toLowerCase())
                .map((item) => item[item.length - 1] === `:` ? item.slice(0, -1) : item)
                .join(`-`)}.jpg`;
};

export {
  getImgURL
};
