// @flow
//
// src/Example.js
import React from "react";
import Worldview, { Cubes, Axes, Text, Grid } from "regl-worldview";
// import Plot from "webviz-core/src/panels/Plot/index";

export default function Example() {
  return (
    <Worldview>
      <Cubes>
        {[
          {
            pose: {
              orientation: { x: 0, y: 0, z: 0, w: 1 },
              // position the cube at the center
              position: { x: 0, y: 0, z: 0 },
            },
            scale: { x: 1, y: 1, z: 1 },
            // rgba values are between 0 and 1 (inclusive)
            color: { r: 1, g: 0, b: 0, a: 1 },
          },
        ]}
      </Cubes>
      <Axes />
      <Grid />
      <Text autoBackgroundColor>
        {[
          {
            text: "Hello, Worldview! ",
            color: { r: 1, g: 1, b: 1, a: 1 },
            pose: {
              orientation: { x: 0, y: 0, z: 0, w: 1 },
              position: { x: 0, y: 5, z: 10 },
            },
            scale: { x: 1, y: 1, z: 1 },
          },
        ]}
      </Text>
      {/* <Plot
    config={{
      paths: [
        { value: "/some_topic/location.pose.velocity", enabled: true, timestampMethod: "receiveTime" },
        { value: "/some_topic/location.pose.acceleration", enabled: true, timestampMethod: "receiveTime" },
        {
          value: "/some_topic/location.pose.acceleration.@derivative",
          enabled: true,
          timestampMethod: "receiveTime",
        },
        { value: "/boolean_topic.data", enabled: true, timestampMethod: "receiveTime" },
        { value: "/some_topic/state.items[0].speed", enabled: true, timestampMethod: "receiveTime" },
      ],
      minYValue: "",
      maxYValue: "5.5",
    }}
  /> */}
    </Worldview>

  );
}