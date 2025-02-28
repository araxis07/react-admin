import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // ตรวจสอบว่าเป็นโหมด dark หรือ light
  const isDarkMode = theme.palette.mode === "dark";

  // กำหนดสีต่าง ๆ ตามโหมด
  const axisLineColor = isDarkMode ? "#fff" : "#000";   // สีแกน
  const crosshairColor = isDarkMode ? "#fff" : "#000";  // สีเส้น crosshair
  const tooltipBg = isDarkMode ? colors.primary[400] : "#fff"; // พื้นหลัง tooltip
  const tooltipText = isDarkMode ? "#fff" : "#000";     // สีข้อความ tooltip

  return (
    <ResponsiveLine
      data={data}
      /* ตั้งค่าธีมของ Nivo */
      theme={{
        /* กำหนดสีของ axis (แกน) */
        axis: {
          domain: {
            line: {
              stroke: axisLineColor,
              strokeWidth: 2,
            },
          },
          legend: {
            text: {
              fill: axisLineColor,
            },
          },
          ticks: {
            line: {
              stroke: axisLineColor,
              strokeWidth: 1,
            },
            text: {
              fill: axisLineColor,
            },
          },
        },
        /* กำหนดสีตัวอักษร legend */
        legends: {
          text: {
            fill: axisLineColor,
          },
        },
        /* กำหนดสีเส้น crosshair */
        crosshair: {
          line: {
            stroke: crosshairColor,
            strokeWidth: 1,
            strokeOpacity: 0.75,
          },
        },
        /* กำหนดสีพื้นหลังและข้อความของ tooltip */
        tooltip: {
          container: {
            background: tooltipBg,
            color: tooltipText,
            borderRadius: "4px",
            boxShadow: "0 3px 9px rgba(0, 0, 0, 0.5)",
            fontSize: "14px",
          },
        },
      }}
      /* ตั้งค่าสีเส้นของ Line Chart */
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      /* ถ้าต้องการเส้น Grid เป็นสี axisLineColor ก็สามารถเปิดใช้งาน */
      enableGridX={true}
      enableGridY={true}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}       // เปิด Mesh เพื่อตรวจจับ Hover
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
