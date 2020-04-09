import React from 'react';
import { Container, Grid, Header, Image, List, Section } from 'semantic-ui-react';
import css from 'styled-jsx/css';

const Head = ({
	children,
	contacts,
	cv,
	sub,
	icon,
	name,
	...props
}) => {
	return (
		<div>
			<Grid verticalAlign='middle'>
				<Grid.Row>
					<Grid.Column width={8}>
						<Header as='h3'>
							{icon && (
								<Image className="face" circular src={icon} />
							)}
							<Header.Content>
								{name && <Header className="name">{name}</Header>}
								{sub && <Header.Subheader>{sub}</Header.Subheader>}
							</Header.Content>
						</Header>
					</Grid.Column>
					<Grid.Column width={8}>
						<Header as='h4'>
							<Header.Content>
								{contacts && <Header.Subheader>{contacts}</Header.Subheader>}
							</Header.Content>
						</Header>
					</Grid.Column>
				</Grid.Row>
			</Grid>

			{ children && (
				<Container className="desc">
					<p>
						{ children }
					</p>
				</Container>
			)}

			<style jsx>{`
				div {
					margin-bottom: 1rem;

					font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
					color: rgba(0,0,0,.87);
					font-size: 1.25em;
				}

				* :global(.face) {
					width: 4.5em !important;
				}

				* :global(.desc) {
					margin-top: 1em;
				}
			`}</style>
		</div>
	);
};

export default Head;