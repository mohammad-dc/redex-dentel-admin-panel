import React, { FC } from "react";

import { Polar } from "react-chartjs-2";
import { IUserCity } from "../../interfaces/store/app.interface";

const DoughnutDashboardChart: FC<{ results: IUserCity[]; label: string }> = ({
  results,
  label,
}) => {
  const labels: string[] = [];
  const counts: number[] = [];

  results.forEach((el) => {
    labels.push(el._id);
    counts.push(el.count);
  });

  const data = {
    labels,
    datasets: [
      {
        label: label,
        data: counts,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
  };
  return (
    <div>
      <Polar data={data} width={400} height={400} />
    </div>
  );
};

export default DoughnutDashboardChart;
