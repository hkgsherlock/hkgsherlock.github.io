import React, { Fragment } from 'react';

import { Grid, Header, Label, List, Image, Item } from "semantic-ui-react";

const ExperienceItem = ({
	children,
	duties,
	extra,
	image,
	company,
	position,
	period,
	projects,
	tag,
	tags,
	...props
}) => {
	if (!tags & tag) {
		tags = [tag];
	}

	return (
	    <Item className="experience-item">
			<style jsx>{`
				.experience {
					margin-top: 1em;
				}

				.meta:first-child {
					margin-top: 0 !important;
				}

				.experience-item > .content > .description
				{
					margin-top: 1em !important;
				}
			`}</style>
			{image && (
				<Item.Image size="tiny" rounded style={{ position: "relative", top: 0, left: 0 }}>
					<Image src={image} />
					{tags && (
						<div style={{ position: "absolute", bottom: 0, left: 0, opacity: .6 }}>
							<Label.Group>
							    {tags.map(e => 
							    	<Label as='a' key={e} style={{ fontSize: "10px" }}>{e}</Label>
						    	)}
							</Label.Group>
						</div>
					)}
				</Item.Image>
			)}
			<Item.Content>
	      		{period && (
	      			<Item.Meta>
		      			{period}
		      			{position && (
		      				<Fragment>
		      					{': '}
		      					<span style={{ fontWeight: 'bold' }}>{position}</span>
		      				</Fragment>
	      				)}
		      		</Item.Meta>
		      	)}
	      		<Item.Header as='h3'>{company}</Item.Header>
	      		<Item.Description>
	      			{children}
	      			{(duties || projects) && (
	      				<Grid columns={(duties && projects) ? 2 : 1} divided /*relaxed*/ stackable>
		                    <Grid.Row>
		                    	{duties && (
				                    <Grid.Column>
				                        <Header as="h4">Duties</Header>
				                        <List bulleted>
				                        	{
				                        		Array.isArray(duties)
					                        		? duties.map((e, i) => (<List.Item key={i}>{e}</List.Item>))
					                        		: duties
				                        	}
				                        </List>
				                    </Grid.Column>
	                    		)}
		                    	{projects && (
				                    <Grid.Column>
				                        <Header as="h4">Projects</Header>
				                        <Item.Group>
				                        	{
				                        		Array.isArray(projects)
					                        		? projects.map(({
					                        				image,
						                        			name,
						                        			url,
						                        			period,
						                        			description,
						                        		}) => (
						                        			<Item key={`${period} ${name}`}>
						                        				{image && (
						                        					<Item.Image size="tiny" src={image} />
					                        					)}
					                        					<Item.Content>
					                        						<Item.Header
					                        							style={{
					                        								fontSize: "15px",
					                        							}}
						                        						{...(url && {
						                        							as: "a",
						                        							href: url,
						                        						})}
						                        					>
						                        						{name}
					                        						</Item.Header>
					                        						{period && (<Item.Meta>{period}</Item.Meta>)}
					                        						{description && (<Item.Description>{description}</Item.Description>)}
					                        					</Item.Content>
						                        			</Item>
					                        			))
					                        		: projects
				                        	}
				                        </Item.Group>
			                    	</Grid.Column>
	                    		)}
		                    </Grid.Row>
		                </Grid>
	  				)}
	      		</Item.Description>
	      		{extra && (
	      			<Item.Extra>{extra}</Item.Extra>
	  			)}
			</Item.Content>
	    </Item>
	);
};

const Experience = (props) => (
	<Item.Group className="experience" divided {...props}>
	</Item.Group>
);

Experience.Item = ExperienceItem;

export default Experience;
