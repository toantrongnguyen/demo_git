import React, { Component } from 'react';
import Button from './button';

var x;

class Main extends Component {
	state = {
		isRun: false,
		num1: 1,
		num2: 9,
		num3: 3,
		num4: 5,
	};

	  handleRun = isRun => {
		let { 
      num1, 
      num2,
      num3, 
      num4,
     } = this.state;
		this.setState({
			isRun: !this.state.isRun,
		});
		if (isRun === true) {
			if (num1 === 0 && num2 === 0 && num3 === 0 && num4 === 0) {
				alert('Time out');
			} else {
				clearInterval(x);
				x = setInterval(() => {
					this.handleStart();
				}, 1000);
			}
		}
	};

	handlePause = () => {
		this.setState({ isRun: false });
	};

	handleStart = () => {
		let { num1, num2, num3, num4 } = this.state;
		if (num1 !== 0) {
			if (num2 === 0 && num3 === 0 && num4 === 0) {
				num1 = num1 - 1;
				num2 = 9;
				num3 = 5;
				num4 = 9;
			} else if (num2 !== 0) {
				if (num3 === 0 && num4 === 0) {
					num2 = num2 - 1;
					num3 = 5;
					num4 = 9;
				} else if (num3 === 0) {
					if (num4 !== 0) {
						num3 = 0;
						num4 = num4 - 1;
					}
				} else {
					if (num4 === 0) {
						num3 = num3 - 1;
						num4 = 9;
					} else {
						num4 = num4 - 1;
					}
				}
			} else {
				num2 = 0;
				if (num3 !== 0) {
					if (num4 === 0) {
						num4 = 9;
						num3 = num3 - 1;
					}
				} else {
					num3 = 0;
					if (num4 !== 0) {
						num4 = num4 - 1;
					} else {
						alert('Time out');
					}
				}
			}
		} else {
			num1 = 0;
			if (num2 !== 0) {
				if (num3 === 0 && num4 === 0) {
					num2 = num2 - 1;
					num3 = 5;
					num4 = 9;
				} else if (num3 === 0) {
					if (num4 !== 0) {
						num3 = 0;
						num4 = num4 - 1;
					}
				} else {
					if (num4 === 0) {
						num3 = num3 - 1;
						num4 = 9;
					} else {
						num4 = num4 - 1;
					}
				}
			} else {
				num2 = 0;
				if (num3 !== 0) {
					if (num4 === 0) {
						num4 = 9;
						num3 = num3 - 1;
					}
				} else {
					num3 = 0;
					if (num4 !== 0) {
						num4 = num4 - 1;
					} else {
						alert('Time out');
					}
				}
			}
		}
		if (this.state.isRun === true) {
			this.setState({
				num4,
				num3,
				num2,
				num1,
			});
		}
	};

	render() {
		let { num1, num2, num3, num4 } = this.state;
		return (
			<React.Fragment>
				<main className="main">
				<h2 className="title">Time until my next break</h2>
					<div className="content">
						<div className=" block_number block_number--1">
							<span className="number">{num1}</span>
							<span className="number">{num2}</span>
							<h3 className="title_block">Minutes</h3>
						</div>
						<div className="dot">:</div>
						<div className="block_number  block_number--2">
							<span className="number">{num3}</span>
							<span className="number">{num4}</span>
							<h3 className="title_block">Seconds</h3>
						</div>
					</div>
					<Button onPause={this.handlePause} onRun={this.handleRun} isRun={this.state.isRun} />
				</main>
			</React.Fragment>
		);
	}
}

export default Main;
