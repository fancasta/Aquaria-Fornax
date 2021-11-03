<template>
  <group1
    :topMenuProps="group1Data.topMenuProps"
    data-id="24:38:an-component-instance"
  />
</template>

<script>
import Group1 from "./components/Group1.vue";

export default {
  name: "App",
  components: {
    Group1,
  },
  data() {
    return { group1Data };
  },
};

const iconicFilledMediumData = {
  size: "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/size@2x.png",
};

const topMenuData = {
  size: "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/size@2x.png",
  size2:
    "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/size@2x.png",
  size3:
    "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/size@2x.png",
  size4:
    "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/size@2x.png",
  iconicFilledMediumProps: iconicFilledMediumData,
};

const iconicGhostSmallData = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/icon@2x.svg",
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
  src: "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/icon@2x.svg",
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
  size: "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/size@2x.png",
  className: "iconic-filled-medium-2",
};

const rowData = {
  row: "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base-4@2x.svg",
  text5: "#1",
};

const row2Data = {
  row: "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base-3@2x.svg",
  text5: "#2",
  className: "column-item",
};

const row3Data = {
  row: "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base-2@2x.svg",
  text5: "#3",
  className: "column-item",
};

const row4Data = {
  row: "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base-1@2x.svg",
  text5: "#4",
  className: "column-item",
};

const row5Data = {
  row: "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base@2x.svg",
  text5: "#5",
  className: "column-item",
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
  rectanglePath2:
    "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/shape-6@2x.svg",
  size5:
    "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/size@2x.png",
  x40K: "$40k",
  x30K: "$30k",
  x20K: "$20k",
  x10K: "$10k",
  number: "0",
  mon: "Mon",
  totalRevenue: "Total Revenue",
  singaporeApac: "$76685.41",
  size4:
    "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/shape-7@2x.svg",
  size: "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/size@2x.png",
  title: "7,00%",
  size6:
    "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/size@2x.png",
  size7:
    "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/size@2x.png",
  october: "October",
  size8:
    "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/size@2x.png",
  size9:
    "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/size@2x.png",
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
  size10:
    "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/shape@2x.svg",
  size2:
    "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/size@2x.png",
  projects: "Export",
  size11:
    "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/shape-9@2x.svg",
  size3:
    "https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/size@2x.png",
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

const group1Data = {
  topMenuProps: dashboardSampleData,
};
</script>
