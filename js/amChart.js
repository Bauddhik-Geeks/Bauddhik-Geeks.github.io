window.addEventListener("resize", reportWindowSize);
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);

var chart = am4core.create("amchart", am4charts.PieChart3D);
chart.legend = new am4charts.Legend();
chart.hiddenState.properties.opacity = 0;
chart.responsive.enabled = true;

chart.data = [
  {
    label: "Activities",
    value: 15,
    color: am4core.color("#00ff78"),
  },
  {
    label: "Contributions",
    value: 10,
    color: am4core.color("#ff00ae"),
  },
  {
    label: "Sessions",
    value: 2,
    color: am4core.color("#fcff00"),
  },
  {
    label: "Collaborations",
    value: 1,
    color: am4core.color("#36a2eb"),
  },
  {
    label: "Projects",
    value: 1,
    color: am4core.color("#00ffd8"),
  },
  {
    label: "Contributors",
    value: 8,
    color: am4core.color("#ff002a"),
  },
  {
    label: "Community",
    value: 22,
    color: am4core.color("#ff8a00"),
  },
  
];

chart.innerRadius = am4core.percent(30);
chart.radius = am4core.percent(60);

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "value";
series.dataFields.category = "label";
series.slices.template.propertyFields.fill = "color";
series.labels.template.maxWidth = 130;
function reportWindowSize() {
  if (window.innerWidth <= 960) series.labels.template.wrap = true;
  else series.labels.template.wrap = false;
}
