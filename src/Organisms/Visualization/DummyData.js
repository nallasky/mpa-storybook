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
    analysis: {}
  }
};

export const createData = () => {
  const dateArray = [
    "2021-08-09 00:00:00",
    "2021-08-10 00:00:00",
    "2021-08-11 00:00:00",
    "2021-08-12 00:00:00",
    "2021-08-13 00:00:00",
    "2021-08-14 00:00:00",
    "2021-08-15 00:00:00",
    "2021-08-16 00:00:00",
  ];

  for (let i = 0; i < 7; i++) {
    dummyData.data.analysis[i] = {
      "No.": i + 1,
      "Date": dateArray[i],
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