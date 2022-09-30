import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";
import "./assets/Home.scss";
import "./assets/Pages.scss";

const apiBaseUrl = "http://192.168.0.13:8080";

class Homepage extends PureComponent<{}, { data: any, gotData: boolean, rawData: any, }> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      rawData: undefined,
      gotData: false,
    }
    this.getChartData = this.getChartData.bind(this);
    this.pushData = this.pushData.bind(this);
  }

  async getChartData() {
    await axios.get(apiBaseUrl + "/measurements")
    .then((res) => {
      this.setState({
        gotData: true,
        rawData: res
      }, () => { 
        this.state.data[0] === undefined && this.pushData();
      })
    })
  }

  pushData() {
    for(let i: number = 10 ; i >= 0 ; i--) {
      this.state.data.push({
        name: this.state.rawData.data[i].split("$")[0],
        umidade: Number(this.state.rawData.data[i].split("$")[3]).toFixed(1),
        temperatura: Number(this.state.rawData.data[i].split("$")[1]).toFixed(1)
      })
    }
  }

  render() { !this.state.gotData && this.getChartData();
    return (
      <div className="main-screen">
        <div className="app-title">
          <h3> Temperature and humidity chart </h3>
        </div>

        <h3 style={{ textAlign: "center" }}> Temperature and humidity chart </h3>
        <ResponsiveContainer className="main-chart" width="80%" height="80%">
        <LineChart
          width={500}
          height={300}
          data={this.state.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"/>
          <YAxis  yAxisId="left" type="number" domain={[0, 100]}/>
          <YAxis  yAxisId="right" orientation="right" type="number" domain={[0, 45]}/>
          <Legend />
          <Tooltip />
          <Line yAxisId="left" type="monotone" dataKey="umidade" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="temperatura" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
     </div>
    );
  }
}


export default Homepage;  