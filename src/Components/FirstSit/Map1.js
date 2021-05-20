import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import ReactTooltip from "react-tooltip";

const INDIA_TOPO_JSON = require("../../Data/india.topo.json");
let mapdata = require("../../Data/statedata.json");

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937],
};
const LinearGradient = (props) => {
  const { data } = props;
  const boxStyle = {
    width: 180,
    margin: "auto",
  };
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${data.fromColor} , ${data.toColor})`,
    height: 20,
  };
  return (
    <div>
      <div style={boxStyle} className="display-flex">
        <span>{data.min}</span>
        <span className="fill"></span>
        <span>{data.max}</span>
      </div>
      <div style={{ ...boxStyle, ...gradientStyle }} className="mt8"></div>
    </div>
  );
};

// Red Variants
const COLOR_RANGE = [
  "#ffedea",
  "#ffcec5",
  "#ffad9f",
  "#ff8a75",
  "#ff5533",
  "#e2492d",
  "#be3d26",
  "#9a311f",
  "#782618",
];

const DEFAULT_COLOR = "#EEE";

const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

function Map1() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [data, setData] = useState(mapdata);

  const value = "2013";

  const gradientData = {
    fromColor: COLOR_RANGE[0],
    toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
    min: 0,
    max: data.reduce((max, item) => (item[value] > max ? item[value] : max), 0),
  };

  const colorScale = scaleQuantile()
    .domain(data.map((d) => d[value]))
    .range(COLOR_RANGE);

  const onMouseEnter = (geo, current = { [value]: "NA" }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current[value]}`);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent("");
  };

  const onChangeButtonClick = () => {
    setData(mapdata);
  };

  return (
    <div className="full-width-height container">
      <h1 className="no-margin center">States and UTs</h1>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={600}
        height={220}
        data-tip=""
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const current = data.find(
                (s) => s["States/Uts"] === geo.properties.name
              );
              console.log("This is data");
              //   console.log(geo.properties.name);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current[value]) : DEFAULT_COLOR}
                  style={geographyStyle}
                  onMouseEnter={onMouseEnter(geo, current)}
                  onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <LinearGradient data={gradientData} />
      <div className="center">
        <button className="mt16" onClick={onChangeButtonClick}>
          Change
        </button>
      </div>
    </div>
  );
}

export default Map1;
