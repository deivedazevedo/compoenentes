import React, { ReactNode } from "react";

interface GraphicsTemplate {
    chart: {
        type: string;
        zoomType: "y";
    };
    title: {
        text: string;
    };
    subtitle: {
        text: string | undefined;
    };
    xAxis: {
        categories: Array<any>;
        crosshair: boolean;
    };
    yAxis: {
        title: {
            useHTML: boolean;
            text: string;
        };
    };
    tooltip: {
        headerFormat: string;
        pointFormat: string;
        footerFormat: string;
        shared: boolean;
        useHTML: boolean;
    };
    plotOptions?: {
        column: {
            pointPadding: number;
            borderWidth: number;
            dataLabels?: {
                enabled: boolean;
                format: string;
            };
            color: string;
            colorAxis: {};
        };
    };
    series?: Array<object>;
    legend: {
        enabled: boolean;
    };
}

export type CreateTemplateArgs = {
    chartType: "column" | "bar" | "columnrange";
    zoomType: "y";
    title: string;
    subtitle: string | undefined;
    xAxisCategories: Array<any>;
    xAxisCrossHair: boolean;
    yAxisTitle: string;
    yAxisUseHTML: boolean;
    tooltipHeaderFormat: string;
    tooltipPointFormat: string;
    tooltipFooterFormat: string;
    tooltipShared: boolean;
    tooltipUseHTML: boolean;
    plotOptionsPointPadding?: number;
    plotOptionsBorderWidth?: number;
    plotOptionsDataLabelEnable?: boolean;
    plotOptionsDataLabelFormat?: string;
    plotOptionsColor?: string;
    series: Array<object>;
    legendEnable?: boolean;
};

const Template = ({
    chartType,
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
    plotOptionsPointPadding,
    plotOptionsBorderWidth,
    series,
    legendEnable,
    plotOptionsColor,
    plotOptionsDataLabelEnable,
    plotOptionsDataLabelFormat
}: CreateTemplateArgs): GraphicsTemplate => {
    return {
        chart: {
            type: chartType,
            zoomType: "y"
        },
        title: {
            text: title
        },
        subtitle: {
            text: subtitle
        },
        xAxis: {
            categories: xAxisCategories,
            crosshair: xAxisCrossHair
        },
        yAxis: {
            title: {
                text: yAxisTitle,
                useHTML: yAxisUseHTML
            }
        },
        tooltip: {
            footerFormat: tooltipFooterFormat,
            headerFormat: tooltipHeaderFormat,
            pointFormat: tooltipPointFormat,
            shared: tooltipShared,
            useHTML: tooltipUseHTML
        },
        plotOptions: {
            column: {
                borderWidth: plotOptionsBorderWidth,
                pointPadding: plotOptionsPointPadding,
                color: plotOptionsColor
            }
        },
        series: series,
        legend: {
            enabled: legendEnable
        }
    };
};

export default Template;
