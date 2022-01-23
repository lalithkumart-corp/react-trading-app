import { Bar } from "react-chartjs-2";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export const FutureChart = ({ chartData, gsChartTitle }) => {
  return (
    <Grid>
        <Paper>
            <Bar
                width={200}
                height={200}
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: gsChartTitle, //"Floating Chart Example"
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }
                }}
            />
        </Paper>
      {/* <Paper>
        <Bar 
            // width={600}
            // height={400}
            data={{
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                    label: "months",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: "red",
                    },
                ],
            }}
        />
        </Paper> */}
    </Grid>
  );
};
