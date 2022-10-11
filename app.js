import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import styled from 'styled-components';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import classnames from "classnames";
import "./sidebar.css";

const Wrapper = styled.div`
@media (min-width: 700px) {
	display: flex;
	top: 64px;
	position: relative;
	height: calc(100% - 64px);
	width: 100%;
	flex: auto;
	flex-direction: column;
}
`;
const Main = styled.main`
position: fixed;
height: calc(100% - 185px);
width: 100%;
padding: 1em;
overflow-y: scroll;
@media (min-width: 700px) {
	flex: 1;
	margin-left: 220px;
	height: calc(100% - 64px);
	width: calc(100% - 220px);
}
`;


export default class App extends Component {
	state = {
		open: window.matchMedia("(min-width: 1024px)").matches || false
	  };
	
	  ontoggleNav = () => {
		this.setState(prevState => ({
		  isOpen: !prevState.isOpen
		}));
	  };
	
	render() {
		const mobile = window.matchMedia("(max-width: 768px)").matches;

		return (
			<>
				<React.Fragment>
					<BrowserRouter >
						<header>
							<Header ontoggleNav={this.ontoggleNav} />
						</header>
						<section>
						<nav>
								<div className='bodyWrap'>
								<div className={classnames({ blur: mobile && this.state.isOpen })} />
									<div
										className={classnames(
										"sidenav",
										{ sidenavOpen: this.state.isOpen },
										{ sidenavClose: !this.state.isOpen }
										)}
									>
										<a
										href="javascript:void(0)"
										className="closebtn hidex"
										onClick={() => this.ontoggleNav("0px")}
										>
										&times;
										</a>

										<a href="#">
										<i class="fa fa-fw fa-home" />
										About
										</a>
										<a href="#">Services</a>
										
									
									</div>

									<div
										className={classnames(
										"main",
										{ mainShrink: this.state.isOpen },
										{ mainExpand: !this.state.isOpen },
										{ noscroll: mobile && this.state.isOpen }
										)}
									>
								</div>
							</div>
							</nav>

							<article>

								<Routes>
									<Route path="/home" element={<Home />} />
								</Routes>
							</article>
						</section>

					</BrowserRouter>
				</React.Fragment>
			</>
		)
	}


};

