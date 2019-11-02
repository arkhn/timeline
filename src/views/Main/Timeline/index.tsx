import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Colors } from "@blueprintjs/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./style.less";

import { IEvent, IReduxStore } from "src/types";

am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);

interface ITimelineEvent extends IEvent {
  color?: string;
  textDisabled?: boolean;
  icon?: string;
  opacity?: number;
}

const Timeline = () => {
  const [chart, setChart] = useState();
  const events = useSelector((state: IReduxStore) => state.events.events);
  const selectedEvents = useSelector(
    (state: IReduxStore) => state.events.selectedEvents
  );

  let [parsedEvents, setParsedEvents] = useState([]);

  useEffect(() => {
    const pe = events.map(
      (event: IEvent, index: number): ITimelineEvent => {
        const notSelected =
          selectedEvents.length > 0 && selectedEvents.indexOf(index) == -1;

        return {
          ...event,
          color: notSelected ? Colors.GRAY2 : Colors.DARK_GRAY1,
          opacity: notSelected ? 0.3 : 0.8,
          end: event.end ? event.end : event.start,
          icon: "/src/assets/img/arkhn_logo_only_white.svg",
          textDisabled: event.title ? false : true
        };
      }
    );

    setParsedEvents(pe);
  }, [events, selectedEvents]);

  useEffect(() => {
    // Initiate am chart if not defined
    if (!chart) {
      let chart = am4core.create(
        "chart",
        am4plugins_timeline.SerpentineChart
      ) as any;
      chart.curveContainer.padding(100, 20, 50, 20);
      chart.levelCount = 4;
      chart.yAxisRadius = am4core.percent(10);
      chart.yAxisInnerRadius = am4core.percent(2);
      chart.maskBullets = false;

      chart.data = parsedEvents;

      chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";
      chart.dateFormatter.dateFormat = "MM-dd HH";

      chart.fontSize = 12;
      chart.tooltipContainer.fontSize = 12;

      let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "type";
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.labels.template.paddingRight = 25;
      categoryAxis.renderer.minGridDistance = 10;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 70;
      dateAxis.baseInterval = { count: 30, timeUnit: "minute" };
      dateAxis.renderer.tooltipLocation = 0;
      dateAxis.renderer.line.strokeDasharray = "1,4";
      dateAxis.renderer.line.strokeOpacity = 0.5;
      dateAxis.tooltip.background.fillOpacity = 0.5;
      dateAxis.tooltip.background.cornerRadius = 5;
      dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
        "alternativeBackground"
      );
      dateAxis.tooltip.label.paddingTop = 7;
      dateAxis.extraMax = 0.02;
      dateAxis.extraMin = 0.02;
      dateAxis.max = Date.now();
      dateAxis.strictMinMax = true;
      // dateAxis.endLocation = 0;
      // dateAxis.startLocation = 0;

      let labelTemplate = dateAxis.renderer.labels.template;
      labelTemplate.verticalCenter = "middle";
      labelTemplate.fillOpacity = 0.4;
      labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor(
        "background"
      );
      labelTemplate.background.fillOpacity = 1;
      labelTemplate.padding(7, 7, 7, 7);

      let series = chart.series.push(
        new am4plugins_timeline.CurveColumnSeries()
      );
      series.columns.template.height = am4core.percent(15);

      series.dataFields.openDateX = "start";
      series.dataFields.dateX = "end";
      series.dataFields.categoryY = "type";
      series.baseAxis = categoryAxis;
      series.columns.template.propertyFields.fill = "color"; // get color from data
      series.columns.template.propertyFields.stroke = "color";
      series.columns.template.strokeOpacity = 0;
      series.columns.template.fillOpacity = 0.6;

      let imageBullet = series.bullets.push(new am4plugins_bullets.PinBullet());
      imageBullet.locationX = 1;
      imageBullet.propertyFields.stroke = "color";
      imageBullet.background.propertyFields.fill = "color";
      imageBullet.image = new am4core.Image();
      imageBullet.image.propertyFields.href = "icon";
      imageBullet.image.scale = 0.3;
      imageBullet.propertyFields.opacity = "opacity";
      imageBullet.circle.radius = am4core.percent(100);
      imageBullet.dy = -5;

      let textBullet = series.bullets.push(new am4charts.LabelBullet());
      textBullet.label.propertyFields.text = "title";
      textBullet.disabled = true;
      textBullet.propertyFields.disabled = "textDisabled";
      textBullet.label.strokeOpacity = 0;
      textBullet.locationX = 1;
      textBullet.dy = -100;
      textBullet.label.textAlign = "middle";

      chart.scrollbarX = new am4core.Scrollbar();
      chart.scrollbarX.align = "center";
      chart.scrollbarX.width = am4core.percent(75);
      chart.scrollbarX.opacity = 1;

      let cursor = new am4plugins_timeline.CurveCursor();
      chart.cursor = cursor;
      cursor.xAxis = dateAxis;
      cursor.yAxis = categoryAxis;
      cursor.lineY.disabled = true;
      cursor.lineX.strokeDasharray = "1,4";
      cursor.lineX.strokeOpacity = 1;

      dateAxis.renderer.tooltipLocation2 = 0;
      categoryAxis.cursorTooltipEnabled = false;

      setChart(chart);
    } else {
      chart.data = parsedEvents;
      setChart(chart);
    }
  }, [parsedEvents]);

  return (
    <div className="timeline">
      <div className="chart" />
    </div>
  );
};

export default Timeline;
