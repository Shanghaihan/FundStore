import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  var data = [
    {
      year: '2020-01',
      value: 3,
    },
    {
      year: '2020-02',
      value: 4,
    },
    {
      year: '2020-03',
      value: 3.5,
    },
    {
      year: '2020-04',
      value: 5,
    },
    {
      year: '2020-05',
      value: 4.9,
    },
    {
      year: '2020-06',
      value: 5.2,
    },
    {
      year: '2020-07',
      value: 6.3,
    },
    {
      year: '2020-08',
      value: 7.1,
    },
    {
      year: '2020-09',
      value: 8.2,
    },
    {
        year: '2020-10',
        value: 8.3,
    },
    {
        year: '2020-11',
        value: 9.2,
    },
    {
        year: '2020-12',
        value: 9.5,
    },
  ];
  var config = {
    data: data,
    xField: 'year',
    yField: 'value',
    label: {},
    xAxis: { tickCount: 5 },
    slider: {
      start: 0.1,
      end: 0.8,
    },
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: { showMarkers: false },
    state: {
      active: {
        style: {
          shadowColor: 'yellow',
          shadowBlur: 4,
          stroke: 'transparent',
          fill: 'red',
        },
      },
    },
    theme: {
      geometries: {
        point: {
          diamond: {
            active: {
              style: {
                shadowColor: '#FCEBB9',
                shadowBlur: 2,
                stroke: '#F6BD16',
              },
            },
          },
        },
      },
    },
    interactions: [{ type: 'marker-active' }],
  };
  return <Line {...config} />;
};

export default DemoLine;