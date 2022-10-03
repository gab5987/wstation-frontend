import React from "react";
import "./assets/Pages.scss";
import ReactTableUI from 'react-table-ui'
import axios from "axios";

const apiBaseUrl = "http://147.182.208.9:8080";
class Logs extends React.Component<{resumeLanguage: any}, { data: any, gotData: boolean, rawData: any, isPushed: boolean, }>  {
	constructor(props: any) {
		super(props);
		this.state = {
				data: [],
				rawData: undefined,
				gotData: false,
				isPushed: false
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
		for(let i: number = 0 ; i < this.state.rawData.data.length ; i++) {
			this.state.data.push({
				id: this.state.rawData.data[i].split("$")[0],
				Humidity: `${Number(this.state.rawData.data[i].split("$")[3]).toFixed(1)} %`,
				Temperature: `${Number(this.state.rawData.data[i].split("$")[1]).toFixed(1)} ºC`,
				"Heat Index": `${Number(this.state.rawData.data[i].split("$")[2]).toFixed(1)} ºC`,
				Date: `${new Date(Number(this.state.rawData.data[i].split("$")[4]))}`,
			})
		}
		this.setState({ isPushed: true })
	}

	render() { !this.state.gotData && this.getChartData();
			if(this.state.isPushed === false){
				return <h1>wait</h1>
			} else {
				return (
					<div className="app">
							<div className="app-title">
									<h3>Logs</h3>
							</div>
							<ReactTableUI
									title='My Table'
									data={ this.state.data }
									actionOptions={{
											
									}}
									styleOptions={{
											titleBar: false,
											theme: {
													colors: {
															background: {
																	primary: "#282c34",
																	secondary: "#343a45",
															},
															text: {
																	primary: "#b5b3b3",
																	secondary: "#b5b3b3",
															},
															border: {
																	primary: "#a3a3a3",
															}
													}
											},
									}}
							/>
					</div>
				);
			}
	}
}
export default Logs;