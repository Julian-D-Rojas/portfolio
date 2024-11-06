export function CvIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="2.665rem"
			height="2.665rem"
			className="cv-icon"
			{...props}
		>
			<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}>
				<circle className="circle" cx="12" cy="12" r="10"  />
				<path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
				<path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2"></path>
				<path d="M11 12.5a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0m2-4.5l1.5 6l1.5-6"></path>
			</g>
		</svg>
	);
}