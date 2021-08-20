export const createData = (x, y, z, row) => {
  const tmpX = [], tmpY= {}, tmpZ = [];

  Object.keys(row).map((key) => {
    tmpX.push(row[key][x]);
    tmpZ.push(row[key][z]);
  });

  y.map((v) => {
    const tmp = [];
    Object.keys(row).map((key) => {
      tmp.push(row[key][v]);
    });
    tmpY[v] = tmp;
  });

  return {
    x: tmpX.filter((v, i) => tmpX.indexOf(v) === i),
    y: tmpY,
    z: tmpZ.filter((v, i) => tmpZ.indexOf(v) === i),
  };
};

export const createXZdata = (value, row) => {
  const tmpArray = [];

  Object.keys(row).map((key) => {
    tmpArray.push(row[key][value]);
  });

  return tmpArray.filter((v, i) => tmpArray.indexOf(v) === i);
};

export const createYdata = (arr, row) => {
  const tmpObj = {};

  arr.map((v) => {
    const tmp = [];
    Object.keys(row).map((key) => {
      tmp.push(row[key][v]);
    });
    tmpObj[v] = tmp;
  });

  return tmpObj;
};

export const createYZdata = (filter, order) => {
  const findFalse = [];

  Object.keys(filter).map((k) => {
    if (filter[k] === false) {
      findFalse.push(k);
    }
  });

  return order.filter((v) => findFalse.findIndex((x) => x === v) === -1);
};