import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';


interface Iprops {
    data:Array<number>
}
const DemoPie: React.FC<Iprops> = (props) => {

  var {data} = props;
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.5,
    label: {
      type: 'inner',
      offset: '-50%',
      content: function content(_ref:any) {
        var percent = _ref.percent;
        //@ts-ignore
        return ''.concat(percent * 100, '%');
      },
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        formatter: function formatter() {
        //   return 'AntV\nG2Plot';
        },
      },
    },
  };
  //@ts-ignore
  return <Pie {...config} />;
};

export default DemoPie;