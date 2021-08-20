let dummyData = {
  data: {
    disp_order: [
      "No.",
      "Date",
      "Z Sensor Meas. BL Delta Max",
      "Z Sensor Meas. BC Delta Max",
      "Z Sensor Meas. BR Delta Max",
      "Z Sensor Meas. FL Delta Max",
      "Z Sensor Meas. FC Delta Max",
      "Z Sensor Meas. FR Delta Max",
      "L V/T AVE",
      "L V/T Delta Max",
      "L H/S AVE",
      "L H/S Delta Max",
      "C V/T AVE",
      "C V/T Delta Max",
      "C H/S AVE",
      "C H/S Delta Max",
      "R V/T AVE",
      "R V/T Delta Max",
      "R H/S AVE",
      "R H/S Delta Max",
      "Z AVE",
      "Z Delta Max",
      "Pitch AVE",
      "Pitch Delta Max",
      "Roll AVE",
      "Roll Delta Max"
    ],
    disp_graph_f: {
      "Z Sensor Meas. BL Delta Max": true,
      "Z Sensor Meas. BC Delta Max": true,
      "Z Sensor Meas. BR Delta Max": true,
      "Z Sensor Meas. FL Delta Max": true,
      "Z Sensor Meas. FC Delta Max": true,
      "Z Sensor Meas. FR Delta Max": true,
      "L V/T AVE": true,
      "L V/T Delta Max": true,
      "L H/S AVE": true,
      "L H/S Delta Max": true,
      "C V/T AVE": true,
      "C V/T Delta Max": true,
      "C H/S AVE": true,
      "C H/S Delta Max": true,
      "R V/T AVE": true,
      "R V/T Delta Max": true,
      "R H/S AVE": true,
      "R H/S Delta Max": true,
      "Z AVE": true,
      "Z Delta Max": true,
      "Pitch AVE": true,
      "Pitch Delta Max": true,
      "Roll AVE": true,
      "Roll Delta Max": true,
      "Date": false,
      "No.": false
    },
    row: {}
  }
};

export const createData = (maxLength) => {
  const now = new Date();

  for (let i = 0; i < maxLength; i++) {
    const dummyDate = new Date(now.setDate(now.getDate() + 1));
    const year = dummyDate.getFullYear();
    const month = ("0" + (dummyDate.getMonth() + 1)).slice(-2);
    const day = ("0" + dummyDate.getDate()).slice(-2);
    const hours = ("0" + dummyDate.getHours()).slice(-2);
    const minutes = ("0" + dummyDate.getMinutes()).slice(-2);
    const seconds = ("0" + dummyDate.getSeconds()).slice(-2);

    dummyData.data.row[i] = {
      "No.": i === maxLength - 1 ? "ALL" : i + 1,
      "Date": year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds,
      "Z Sensor Meas. BL Delta Max": Math.floor(Math.random() * 20000),
      "Z Sensor Meas. BC Delta Max": Math.floor(Math.random() * 20000),
      "Z Sensor Meas. BR Delta Max": Math.floor(Math.random() * 20000),
      "Z Sensor Meas. FL Delta Max": Math.floor(Math.random() * 20000),
      "Z Sensor Meas. FC Delta Max": Math.floor(Math.random() * 20000),
      "Z Sensor Meas. FR Delta Max": Math.floor(Math.random() * 20000),
      "L V/T Delta Max": Math.floor(Math.random() * 20000),
      "L H/S Delta Max": Math.floor(Math.random() * 20000),
      "C V/T Delta Max": Math.floor(Math.random() * 20000),
      "C H/S Delta Max": Math.floor(Math.random() * 20000),
      "R V/T Delta Max": Math.floor(Math.random() * 20000),
      "R H/S Delta Max": Math.floor(Math.random() * 20000),
      "Z Delta Max": Math.floor(Math.random() * 20000),
      "Pitch Delta Max": Math.floor(Math.random() * 20000),
      "Roll Delta Max": Math.floor(Math.random() * 20000),
      "L V/T AVE": Math.random() * 20000,
      "L H/S AVE": Math.random() * 20000,
      "C V/T AVE": Math.random() * 20000,
      "C H/S AVE": Math.random() * 20000,
      "R V/T AVE": Math.random() * 20000,
      "R H/S AVE": Math.random() * 20000,
      "Z AVE": Math.random() * 20000,
      "Pitch AVE": Math.random() * 20000,
      "Roll AVE": Math.random() * 20000
    };
  }

  return dummyData;
};