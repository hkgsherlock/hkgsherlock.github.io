import React, { Fragment } from 'react';

import GithubIcon from "./github-icon.png";

const CornerGithub = ({
	url
}) => (
	<Fragment>
		<style jsx>{`
			a {
				display: none;
			}

			@media screen {
				a {
					display: block;
					position: absolute;
					top: 10px;
					right: 10px;
				}
			}
		`}</style>
		<a
			className="corner-github"
			href={url}
			title="Visit GitHub profile"
		>
			<img alt="" src={GithubIcon} />
		</a>
	</Fragment>
);

export default CornerGithub;