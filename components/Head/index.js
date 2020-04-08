import React from 'react';
import { Grid, Header, Image, List } from 'semantic-ui-react';
import css from 'styled-jsx/css';

const Head = ({
	children,
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
								{children && <Header.Subheader>{children}</Header.Subheader>}
							</Header.Content>
						</Header>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<style jsx>{`
				div {
					margin-bottom: 1rem;

					font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
					color: rgba(0,0,0,.87);
				}

				* :global(.face) {
					width: 4.5em !important;
				}
			`}</style>
		</div>
	);
};

export default Head;