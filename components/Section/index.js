import React from 'react';
import { Container } from 'semantic-ui-react';

const Section = ({
	children,
	name,
	...props
}) => {
	return (
		<div className="section" {...props}>
			<style jsx>{`
				.section {
					margin-bottom: 1rem;
				    page-break-inside:avoid; 
				    page-break-after:auto 
				}

				.cut {
					padding-bottom: .5rem;
				}

				@media screen {
					.cut {
					  	overflow: hidden;
					  	padding: 0 0 18px;
					  	margin-bottom: 1em;
					}

					.cut-bd {
					  	padding: .5em .5em 0;
					  	position: relative;
					}

					.cut-bd_red {
					  	background: #36c;
					  	color: #fff;
						padding-top: .5em;
				  		border-top: 5px solid #69f;
					}
					.cut-bd_red, .cut-bd_red > * {
					  	font-size: 18px;
					}
					.cut-bd_red:before {
						content: "";
						width: 100%;
						height: 24px;
						position: absolute;
						top: 100%;
						right: 24px;
						background: #36c;
					}
					.cut-bd_red:after {
						content: "";
						width: 0;
						height: 0;
						margin-left: -24px;
						position: absolute;
						top: 100%;
						left: 100%;
						border: 15px solid #36c;
						border-right: 15px solid transparent;
						border-bottom: 15px solid transparent;
					}
				}

				@media print {
					.section .cut h2 {
						font-size: 14pt !important;
					}

					.cut-bd_red {
				  		padding-bottom: .25rem;
				  		border-bottom: 5px solid #69f;
				  		margin-bottom: .25rem;
					}
				}
			`}</style>
			{name && (
				<div className="cut">
			        <div className="cut-bd cut-bd_red">
			          	<h2>
			          		{name}
			          	</h2>
			        </div>
				</div>
			)}
			<Container>
				{children}
			</Container>
		</div>
	);
};

export default Section;