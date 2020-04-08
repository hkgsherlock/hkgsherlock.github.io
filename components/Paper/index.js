import React from 'react';

const Paper = ({ size, children, ...props }) => {
	return (
		<main className="paper" {...props}>
			<style jsx>{`
				main.paper{
				    background-color: #fff;
				}

				@media screen {
				    main.paper {
				        padding: 10mm 1em;
				    }
				}

				@media screen and (min-width: 600px) {
				    main.paper {
				        padding: 10mm;
				    }
				}

				@media screen and (min-width: 210mm) {
				    main.paper {
				    	margin: 4em auto;
				    	width: 210mm;
				    	min-height: 297mm;
				    	box-shadow: 0 0 1.5px #000, 0 0 20px rgba(0,0,0,.05);
					}
				}

				@media print {
				    main.paper {
				    	
					}
				}
			`}</style>
			{children}
		</main>
	);
};

export default Paper;