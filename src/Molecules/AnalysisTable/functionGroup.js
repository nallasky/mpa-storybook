export const createDataSource = (obj) => {
  const tmpArr = [];

  Object.keys(obj).map((k, i) => {
    obj[k]["key"] = i;
    tmpArr.push(obj[k]);
  });

  return tmpArr;
};

export const createColumns = (arr) => {
  const tmpArr = [];

  arr.map((v) => {
    tmpArr.push({
      title: v,
      dataIndex: v,
      key: v,
      width: 160
    });
  });

  return tmpArr;
};

export const initFilterValue = (arr) => {
  const tmpObj = {};
  arr.map((v) => { tmpObj[v.target] = v.selected; });
  return tmpObj;
};

export const filteringData = (orgData, filter) => {
  const tmpArr = [];

  orgData.filter((d) => d.Date !== "").map((v) => {
    let isValid = true;

    Object.keys(filter).map((i) => {
      if (isValid) {
        if (Array.isArray(filter[i])) {
          if (filter[i].findIndex((j) => v[i] === j) === -1) {
            isValid = false;
          }
        } else {
          if (filter[i] !== v[i]) {
            isValid = false;
          }
        }
      }
    });

    if (isValid) {
      tmpArr.push(v);
    }
  });

  tmpArr.push(orgData[orgData.length - 1]);

  return tmpArr;
};