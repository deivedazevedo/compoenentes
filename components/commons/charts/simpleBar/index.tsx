import React, { ComponentProps, ReactElement } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Template from "../commons";

export type SimpleBarPropTypes = {
    title: string;
    subtitle: string | undefined;
    xAxisCategories: Array<any>;
    xAxisCrossHair: boolean;
    yAxisTitle: string;
    yAxisUseHTML?: boolean;
    tooltipHeaderFormat?: string;
    tooltipPointFormat?: string;
    tooltipFooterFormat?: string;
    tooltipShared?: boolean;
    tooltipUseHTML?: boolean;
    plotOptionsPointPadding: number;
    plotOptionsBorderWidth?: number;
    plotOptionsDataLabelEnable?: boolean;
    plotOptionsDataLabelFormat?: string;
    plotOptionsColor?: string;
    series: Array<object>;
    legendEnable?: boolean;
};

const SimpleBarGraphics = ({
    title,
    subtitle,
    xAxisCategories,
    xAxisCrossHair,
    yAxisTitle,
    yAxisUseHTML,
    tooltipHeaderFormat,
    tooltipPointFormat,
    tooltipFooterFormat,
    tooltipShared,
    tooltipUseHTML,
    series,
    legendEnable,
    plotOptionsBorderWidth,
    plotOptionsColor,
    plotOptionsDataLabelEnable,
    plotOptionsDataLabelFormat,
    plotOptionsPointPadding
}: SimpleBarPropTypes): ReactElement => {
    const options = Template({
        chartType: "column",
        plotOptionsBorderWidth: plotOptionsBorderWidth,
        plotOptionsPointPadding: plotOptionsPointPadding,
        series: series,
        subtitle: subtitle,
        title: title,
        tooltipShared: tooltipShared,
        tooltipUseHTML: tooltipUseHTML,
        xAxisCategories: xAxisCategories,
        xAxisCrossHair: xAxisCrossHair,
        yAxisTitle: yAxisTitle,
        yAxisUseHTML: yAxisUseHTML,
        legendEnable: legendEnable,
        plotOptionsColor: plotOptionsColor,
        plotOptionsDataLabelEnable: plotOptionsDataLabelEnable,
        plotOptionsDataLabelFormat: plotOptionsDataLabelFormat,
        tooltipFooterFormat: tooltipFooterFormat,
        tooltipHeaderFormat: tooltipHeaderFormat,
        tooltipPointFormat: tooltipPointFormat
    });

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default SimpleBarGraphics;
