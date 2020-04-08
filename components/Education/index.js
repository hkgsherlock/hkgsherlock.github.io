import React from 'react';

import { Item } from "semantic-ui-react";

const EducationItem = ({
	image,
	school,
	study,
	period,
	children,
	...props
}) => (
    <Item className="education-item">
		{image && (
			<Item.Image size="tiny" centered={false} src={image} />
		)}
		<Item.Content>
      		<Item.Meta>{period}</Item.Meta>
      		<Item.Header as='h3'>{study}</Item.Header>
      		<Item.Description>
      			{school && (<p>{school}</p>)}
      			{children}
      		</Item.Description>
		</Item.Content>
    </Item>
);

const Education = ({ children, ...props}) => (
	<Item.Group className="education" {...props}>
		<style jsx>{`
			.education {
				margin-top: 1em;
			}
		`}</style>
		{children}
	</Item.Group>
);

Education.Item = EducationItem;

export default Education;
