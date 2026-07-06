import Highcharts from "highcharts";
import type { YAxisProps as HighchartsYAxisProps } from "@highcharts/react/options/YAxis";
import type { XAxisProps as HighchartsXAxisProps } from "@highcharts/react/options/XAxis";
export type DataVisualizationProps = {
    options: Highcharts.Options;
};
export type DataVisualizationType = Highcharts.Options;
export type YAxisProps = Omit<HighchartsYAxisProps, "plotLines"> & {
    plotLines?: HighchartsYAxisProps["plotLines"][];
};
export type XAxisProps = Omit<HighchartsXAxisProps, "plotLines"> & {
    plotLines?: HighchartsXAxisProps["plotLines"][];
};
