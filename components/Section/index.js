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
				
				.section .cut h2 {
					font-size: 14pt !important;
				}

				.cut-bd_red {
			  		padding-bottom: .25rem;
			  		border-bottom: 5px solid #69f;
			  		margin-bottom: .25rem;
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