import React from 'react';

export default function MadeHint () {
	return (
		<div>
			<style jsx>{`
				div {
					color: rgba(0,0,0,.25);
					text-align: center;
				}

				div > span {
					font-size: 10px;
				}

				@media screen {
					div {
						margin: -2em auto 2em;
						text-align: center;
					}
				}

				@media print {
					div {
						margin: 0 auto;
					}

					div > span {
						font-size: 8pt !important;
						opacity: .5;
					}
				}
			`}</style>
			<span>Created using Node + React + Next.js</span>
		</div>
	);
};