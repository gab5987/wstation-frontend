import React from "react";
import "./assets/Pages.scss";
import ReactTableUI from 'react-table-ui'
import axios from "axios";

const apiBaseUrl = "http://147.182.208.9:8080";


class Logs extends React.Component<{resumeLanguage: any, resumeMessages: any}, 
	{ data: any, gotData: boolean, rawData: any, isPushed: boolean, }>  {

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
			this.getRightTime = this.getRightTime.bind(this);
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
				"Medição Nº": this.state.rawData.data[i].split("$")[0],
				Umidade: `${Number(this.state.rawData.data[i].split("$")[3]).toFixed(1)} %`,
				Temperatura: `${Number(this.state.rawData.data[i].split("$")[1]).toFixed(1)} ºC`,
				"Heat Index": `${Number(this.state.rawData.data[i].split("$")[2]).toFixed(1)} ºC`,
				Data: `${this.getRightTime(Number(this.state.rawData.data[i].split("$")[4]))}`,
			})
		}
		this.setState({ isPushed: true })
	}

	getRightTime(epochTime: number) {
		//Mon Sep 26 2022 21:36:16 GMT-0300 (Brasilia Standard Time)
		let date = new Date(epochTime * 1000).toLocaleString();
		date = date.split(",")[0] + " às" + date.split(",")[1]
		return date;
	}

	render() { !this.state.gotData && this.getChartData();
			if(this.state.isPushed === false){
				return <h1> { this.props.resumeMessages.loading } </h1>
			} else {
				return (
					<div className="app">
							<div className="app-title">
								<h3>{ this.props.resumeLanguage.title }</h3>
								<p>{ this.props.resumeLanguage.description }</p>
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