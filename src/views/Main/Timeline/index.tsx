import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";

import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import React, { useEffect, useState } from "react";

import "./style.less";

am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);

const mockData = [
  {
    category: "",
    start: "2019-01-10 06:00",
    end: "2019-01-10 07:00",
    text: "Fracture des cheveux",
    textDisabled: false,
    icon: "/src/assets/img/arkhn_logo_only_white.svg"
  },
  {
    category: "",
    start: "2019-01-10 07:00",
    end: "2019-01-10 08:00",
    icon: "/src/assets/img/arkhn_logo_only_white.svg"
  },
  {
    category: "",
    start: "2019-01-10 08:00",
    end: "2019-01-10 09:00",
    icon: "/src/assets/img/arkhn_logo_only_white.svg"
  },
  {
    category: "",
    start: "2019-01-10 09:00",
    end: "2019-01-10 10:00",
    icon: "/src/assets/img/arkhn_logo_only_white.svg"
  },
  {
    category: "",
    start: "2019-01-10 10:00",
    end: "2019-01-10 12:00",
    icon: "/src/assets/img/arkhn_logo_only_white.svg"
  },
  {
    category: "",
    start: "2019-01-10 12:00",
    end: "2019-01-10 13:00",
    icon: "/src/assets/img/arkhn_logo_only_white.svg"
  },
  {
    category: "",
    start: "2019-01-10 13:00",
    end: "2019-01-10 14:00",
    text: "Entorse de l'oreille gauche",
    textDisabled: false,
    icon: "/src/assets/img/arkhn_logo_only_white.svg"
  },
  {
    category: "",
    start: "2019-01-10 14:00",
    end: "2019-01-10 16:00",
    icon: "/src/assets/img/arkhn_logo_only_white.svg"
  },
  {
    category: "",
    start: "2019-01-10 16:00",
    end: "2019-01-10 17:00",
    icon: "/src/assets/img/arkhn_logo_only_white.svg"
  },
  {
    category: "",
    start: "2019-01-10 17:00",
    end: "2019-01-10 20:00",
    icon: "/src/assets/img/arkhn_logo_only_white.svg"
  },
  {
    category: "",
    start: "2019-01-10 20:00",
    end: "2019-01-10 20:30",
    icon: "/src/assets/img/arkhn_logo_only_white.svg"
  },
  {
    category: "",
    start: "2019-01-10 20:30",
    end: "2019-01-10 21:30",
    icon: "/src/assets/img/arkhn_logo_only_white.svg"
  },
  {
    category: "",
    start: "2019-01-10 21:30",
    end: "2019-01-10 22:00",
    icon: "/src/assets/img/arkhn_logo_only_white.svg"
  },
  {
    category: "",
    start: "2019-01-10 22:00",
    end: "2019-01-10 23:00",
    icon: "/src/assets/img/arkhn_logo_only_white.svg"
  },
  {
    category: "",
    start: "2019-01-10 23:00",
    end: "2019-01-11 00:00",
    icon: "/src/assets/img/arkhn_logo_only_white.svg"
  },
  {
    category: "",
    start: "2019-01-11 00:00",
    end: "2019-01-11 01:00",
    text: "Double croisement des doigts de pieds",
    textDisabled: false,
    icon: "/src/assets/img/arkhn_logo_only_white.svg"
  }
];

const Timeline = () => {
  let [chart, setChart] = useState();
  let [colorSet, setColorSet] = useState();

  useEffect(() => {
    let chart = am4core.create(
      "chart",
      am4plugins_timeline.SerpentineChart
    ) as any;
    chart.curveContainer.padding(100, 20, 50, 20);
    chart.levelCount = 3;
    chart.yAxisRadius = am4core.percent(20);
    chart.yAxisInnerRadius = am4core.percent(2);
    chart.maskBullets = false;

    chart.data = mockData;

    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";
    chart.dateFormatter.dateFormat = "HH";

    chart.fontSize = 10;
    chart.tooltipContainer.fontSize = 10;

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.paddingRight = 25;
    categoryAxis.renderer.minGridDistance = 10;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 30, timeUnit: "minute" };
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.renderer.line.strokeDasharray = "1,4";
    dateAxis.renderer.line.strokeOpacity = 0.5;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    dateAxis.tooltip.label.paddingTop = 7;
    dateAxis.endLocation = 0;
    dateAxis.startLocation = -0.5;

    let labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = "middle";
    labelTemplate.fillOpacity = 0.4;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor(
      "background"
    );
    labelTemplate.background.fillOpacity = 1;
    labelTemplate.padding(7, 7, 7, 7);

    let series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
    series.columns.template.height = am4core.percent(15);

    series.dataFields.openDateX = "start";
    series.dataFields.dateX = "end";
    series.dataFields.categoryY = "category";
    series.baseAxis = categoryAxis;
    series.columns.template.propertyFields.fill = "color"; // get color from data
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.fillOpacity = 0.6;

    let imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet1.locationX = 1;
    imageBullet1.propertyFields.stroke = "color";
    imageBullet1.background.propertyFields.fill = "color";
    imageBullet1.image = new am4core.Image();
    imageBullet1.image.propertyFields.href = "icon";
    imageBullet1.image.scale = 0.3;
    imageBullet1.circle.radius = am4core.percent(100);
    imageBullet1.dy = -5;

    let textBullet = series.bullets.push(new am4charts.LabelBullet());
    textBullet.label.propertyFields.text = "text";
    textBullet.disabled = true;
    textBullet.propertyFields.disabled = "textDisabled";
    textBullet.label.strokeOpacity = 0;
    textBullet.locationX = 1;
    textBullet.dy = -100;
    textBullet.label.textAlign = "middle";

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.align = "center";
    chart.scrollbarX.width = am4core.percent(75);
    chart.scrollbarX.opacity = 0.5;

    let cursor = new am4plugins_timeline.CurveCursor();
    chart.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = categoryAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.strokeDasharray = "1,4";
    cursor.lineX.strokeOpacity = 1;

    dateAxis.renderer.tooltipLocation2 = 0;
    categoryAxis.cursorTooltipEnabled = true;

    setChart(chart);
  }, [setChart]);

  return (
    <div className="timeline">
      <div className="chart" />
    </div>
  );
};

export default Timeline;
