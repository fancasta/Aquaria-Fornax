<template>
  <BackButton />
  <dashboard-sample v-bind="dashboardSampleData" />
</template>

<script>
import DashboardSample from "../components/Manager/DashboardSample.vue";
import BackButton from "@/components/BasicComponent/BackButton.vue";

export default {
  name: "App",
  components: {
    DashboardSample,
    BackButton,
  },
  data() {
    return { dashboardSampleData };
  },
};

const iconicFilledMediumData = {
  size: "size.png",
};

const topMenuData = {
  size: "size.png",
  size2: "size.png",
  size3: "size.png",
  size4: "size.png",
  iconicFilledMediumProps: iconicFilledMediumData,
};

const iconicGhostSmallData = {
  src: "icon.svg",
};

const tooltipWhiteData = {
  price: "$2562",
};

const itemData = {
  children: "SEO",
};

const item2Data = {
  children: "PR",
  className: "item-1-1",
};

const item3Data = {
  children: "Campaigns",
  className: "item-1-2",
};

const iconicGhostSmall2Data = {
  src: "icon.svg",
  className: "iconic-ghost-small-1",
};

const tooltipWhite2Data = {
  price: "12345",
  className: "tooltip-white-1",
};

const item4Data = {
  children: "APAC",
  className: "item",
};

const item5Data = {
  children: "EMEA",
  className: "item-1-3",
};

const item6Data = {
  children: "ANZ",
  className: "item-1",
};

const dayData = {
  children: "Tue",
};

const day2Data = {
  children: "Wed",
};

const day3Data = {
  children: "Thu",
};

const day4Data = {
  children: "Fri",
};

const day5Data = {
  children: "Sat",
};

const day6Data = {
  children: "Sun",
};

const x2Data = {
  number: "3",
  number2: "4",
  number3: "5",
  number4: "6",
  number5: "7",
  number6: "8",
  number7: "9",
};

const calendarDateSelectedData = {
  children: "14",
};

const calendarDateSelected2Data = {
  children: "22",
};

const x22Data = {
  number: "24",
  number2: "25",
  number3: "26",
  number4: "27",
  number5: "28",
  number6: "29",
  number7: "30",
};

const iconicFilledMedium2Data = {
  size: "size.png",
  className: "iconic-filled-medium-2",
};

const rowData = {
  row: "#1",
  text5: "#1",
};

const row2Data = {
  text5: "#2",
  row: "#2",
  // className: "column-item",
};

const row3Data = {
  text5: "#3",
  row: "#3",
  // className: "column-item",
};

const row4Data = {
  text5: "#4",
  row: "#4",
  // className: "column-item",
};

const row5Data = {
  text5: "#5",
  row: "#5",
  // className: "column-item",
};

const badgeFilledData = {
  children: "In Progress",
};

const badgeFilled2Data = {
  children: "Completed",
  className: "badge-filled-1",
};

const badgeFilled3Data = {
  children: "In Progress",
};

const badgeFilled4Data = {
  children: "Completed",
  className: "badge-filled-1",
};

const badgeFilled5Data = {
  children: "Delayed",
  className: "badge-filled-2",
};

const columnData = {
  startDate: "Start Date",
  text15: "07/03/21",
  text14: "08/30/21",
  text13: "10/28/21",
  text12: "09/17/21",
  text11: "-",
};

const column2Data = {
  startDate: "Due Date",
  text15: "12/22/21",
  text14: "10/02/21",
  text13: "12/2/21",
  text12: "11/03/21",
  text11: "07/14/22",
  className: "column-5",
};

const dashboardSampleData = {
  conversion: "Conversion",
  users: "Users",
  revenue: "Revenue",
  octNov2021: "Oct - Nov 2021",
  rectanglePath2: "shape-6.svg",
  size5: "size.png",
  x40K: "$40k",
  x30K: "$30k",
  x20K: "$20k",
  x10K: "$10k",
  number: "0",
  mon: "Mon",
  totalRevenue: "Total Revenue",
  singaporeApac: "$76685.41",
  size4: "shape-7.svg",
  size: "size.png",
  title: "7,00%",
  size6: "size.png",
  size7: "size.png",
  october: "October",
  size8: "size.png",
  size9: "size.png",
  number2: "2021",
  yowYuXuan: "S",
  m: "M",
  inbox: "T",
  w: "W",
  security: "T",
  f: "F",
  calendar: "S",
  text: "",
  number3: "1",
  address: "2",
  number5: "10",
  number6: "11",
  t: "12",
  number8: "13",
  number9: "15",
  price3: "16",
  number11: "17",
  number12: "18",
  number7: "19",
  number13: "20",
  t2: "21",
  number4: "23",
  percent: "Cancel",
  yx: "Filter",
  price2: "Projects",
  dashboard: "Download CSV",
  size10: "shape.svg",
  size2: "size.png",
  projects: "Export",
  size11: "shape-9.svg",
  size3: "size.png",
  downloadCsv: "Project ID",
  // number10: "Project ID",
  place: "Status",
  price: "Manager",
  projectId: "Yow Yu Xuan",
  projectId2: "Yow Yu Xuan",
  status: "Yow Yu Xuan",
  manager: "Yow Yu Xuan",
  yowYuXuan2: "Yow Yu Xuan",
  searchText: "Category",
  number14: "Drafting Marketing campaign",
  number15: "Consumer & Market Research",
  number16: "E-commerce/Digital marketing plan",
  cancel: "Packaging and Product testing",
  filter: "Packaging and Product testing",
  itemProps: topMenuData,
  iconicGhostSmallProps: iconicGhostSmallData,
  tooltipWhiteProps: tooltipWhiteData,
  itemProps2: itemData,
  item2Props: item2Data,
  item3Props: item3Data,
  iconicGhostSmallProps2: iconicGhostSmall2Data,
  tooltipWhite2Props: tooltipWhite2Data,
  item4Props: item4Data,
  item5Props: item5Data,
  item6Props: item6Data,
  dayProps: dayData,
  day2Props: day2Data,
  day3Props: day3Data,
  day4Props2: day4Data,
  day5Props: day5Data,
  day6Props: day6Data,
  x2Props: x2Data,
  calendarDateSelectedProps: calendarDateSelectedData,
  calendarDateSelected2Props: calendarDateSelected2Data,
  x22Props: x22Data,
  iconicFilledMediumProps: iconicFilledMedium2Data,
  rowProps: rowData,
  row2Props: row2Data,
  row3Props: row3Data,
  row4Props: row4Data,
  row5Props: row5Data,
  badgeFilledProps: badgeFilledData,
  badgeFilled2Props: badgeFilled2Data,
  badgeFilled3Props: badgeFilled3Data,
  badgeFilled4Props: badgeFilled4Data,
  badgeFilled5Props: badgeFilled5Data,
  columnProps: columnData,
  column2Props: column2Data,
};
</script>
