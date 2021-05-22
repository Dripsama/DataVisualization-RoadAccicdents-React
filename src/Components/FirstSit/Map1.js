import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import ReactTooltip from "react-tooltip";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
const INDIA_TOPO_JSON = require("../../Data/india.topo.json");
let mapdata = require("../../Data/statedata.json");

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937],
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
  const data = mapdata;

  const options = [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
  ];

  const [value, setValue] = useState("2010");
  const defaultOption = options[0];

  const handleChange = (val) => {
    setValue(val.value);
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

  return (
    <div className="Map1">
      <h2>Realization of road accidents State-wise as a map</h2>
      <Dropdown
        options={options}
        onChange={handleChange}
        value={defaultOption}
        placeholder="Select an option"
      />
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
    </div>
  );
}

export default Map1;
