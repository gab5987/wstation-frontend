import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: (10 * Math.random()).toFixed(2),
    temperatura: (30 * Math.random()).toFixed(2),
    umidade: (100 * Math.random()).toFixed(2),
  },
  {
    name: (10 * Math.random()).toFixed(2),
    temperatura: (30 * Math.random()).toFixed(2),
    umidade: (100 * Math.random()).toFixed(2),
  },
  {
    name: (10 * Math.random()).toFixed(2),
    temperatura: (30 * Math.random()).toFixed(2),
    umidade: (100 * Math.random()).toFixed(2),
  },
  {
    name: (10 * Math.random()).toFixed(2),
    temperatura: (30 * Math.random()).toFixed(2),
    umidade: (100 * Math.random()).toFixed(2),
  },
  {
    name: (10 * Math.random()).toFixed(2),
    temperatura: (30 * Math.random()).toFixed(2),
    umidade: (100 * Math.random()).toFixed(2),
  },
  {
    name: (10 * Math.random()).toFixed(2),
    temperatura: (30 * Math.random()).toFixed(2),
    umidade: (100 * Math.random()).toFixed(2),
  },
  {
    name: (10 * Math.random()).toFixed(2),
    temperatura: (30 * Math.random()).toFixed(2),
    umidade: (100 * Math.random()).toFixed(2),
  },
  {
    name: (10 * Math.random()).toFixed(2),
    temperatura: (30 * Math.random()).toFixed(2),
    umidade: (100 * Math.random()).toFixed(2),
  },
  {
    name: (10 * Math.random()).toFixed(2),
    temperatura: (30 * Math.random()).toFixed(2),
    umidade: (100 * Math.random()).toFixed(2),
  },
];

class Homepage extends PureComponent {
  constructor(props: any) {
    super(props);
  }
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="90%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="umidade" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="temperatura" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}


export default Homepage;  