import FAQ from "./FAQ";
import "./faqlanding.scss";

export default function GsLanding() {
	return (
		<>
			<div
				className="faqLanding"
				// initial={{ opacity: 0 }}
				// animate={{ opacity: 1 }}
				// transition={{ duration: 1, delay: 0.5 }}
			>
				<div className="wrapper">
					<div
						className="welcome"
						// initial={{ y: "100vw" }}
						// animate={{ y: 0 }}
						// transition={{
						// 	type: "spring",
						// 	duration: 2,
						// 	delay: 1,
						// }}
					>
						<div className="top">
							<h1>FREQUENTLY ASKED QUESTIONS</h1>
						</div>
						<div className="bottom"></div>
					</div>
				</div>
			</div>
			<FAQ />
		</>
	);
}
