import React, { FC, useLayoutEffect } from "react";

import { Line } from "react-chartjs-2";
import { IUsersJoining } from "../../interfaces/store/app.interface";

const CurvedColumnsChart: FC<{ results: IUsersJoining[] }> = ({ results }) => {
  let joining_counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  results.forEach((el) => (joining_counts[el._id - 1] = el.count));

  const data: any = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "عدد المنضمين",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#27A8E0",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#27A8E0",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#27A8E0",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: joining_counts,
      },
    ],
  };

  return <Line data={data} />;
};

export default CurvedColumnsChart;
