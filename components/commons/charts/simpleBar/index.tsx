import React, { Children, ReactElement, ReactNode } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { CreateTemplateArgs } from "../commons";
import Template from "../commons";
import reactElementToJSXString from "react-element-to-jsx-string";

type SubTitlePropTypes = {
    children: ReactNode;
};

const SubTitle = ({ children }: SubTitlePropTypes) => {
    return (
        <a href="#" style={{ color: "red", border: "1px solid red" }}>
            {children}
        </a>
    );
};

const series = [
    {
        name: "Oil and gas extraction",
        data: [
            20, 13.63, 13.73, 13.67, 14.37, 14.89, 14.56, 14.32, 14.13, 13.93,
            13.21, 12.16
        ],
        borderColor: "#ff0000",
        backgroundColor: "rgba(235, 30, 30, 0.93)"
    }
    // {
    //     name: "Manufacturing industries and mining",
    //     data: [
    //         12.24, 12.24, 11.95, 12.02, 11.65, 11.96, 11.59, 11.94, 11.96,
    //         11.59, 11.42, 11.76
    //     ],
    //     borderColor: "#ff0000"
    // },
    // {
    //     name: "Road traffic",
    //     data: [
    //         10.0, 9.93, 9.97, 10.01, 10.23, 10.26, 10.0, 9.12, 9.36, 8.72, 8.38,
    //         8.69
    //     ],
    //     borderColor: "#ff0000"
    // },
    // {
    //     name: "Agriculture",
    //     data: [
    //         4.35, 4.32, 4.34, 4.39, 4.46, 4.52, 4.58, 4.55, 4.53, 4.51, 4.49,
    //         4.57
    //     ],
    //     borderColor: "#ff0000"
    // }
];
const categories = [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021"
];

const SimpleBarGraphics = ({}): ReactElement => {
    const test = Template({
        chartType: "column",
        zoomType: "y",
        plotOptionsBorderWidth: 0.4,
        plotOptionsPointPadding: 0.1,
        series: series,
        subtitle: reactElementToJSXString(<SubTitle>deivsdaed</SubTitle>),
        title: "Emissions to air in Norway",
        tooltipFooterFormat: "",
        tooltipHeaderFormat: "",
        tooltipPointFormat: "",
        tooltipShared: false,
        tooltipUseHTML: false,
        xAxisCategories: categories,
        xAxisCrossHair: true,
        yAxisTitle: "Million tonnes CO<sub>2</sub>-equivalents",
        yAxisUseHTML: true,
        legendEnable: false,
        plotOptionsColor: "#ff0000"
    });

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                // constructorType={"stockChart"}
                options={test}
            />
        </div>
    );
};

export default SimpleBarGraphics;
