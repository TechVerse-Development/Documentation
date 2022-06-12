import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
	{
		title: "Globally Available",
		description: (
			<>
				Our services are geo-routed to ensure high speeds and low latency.
				Wherever you are in the world, you'll still get low latency while using
				our services.
			</>
		),
	},
	{
		title: "99.9% Availability",
		description: (
			<>
				We guarantee 99.9% availability. With our systems, we can guarantee that
				we won't be going down without a valid reason.
			</>
		),
	},
	{
		title: "Secure",
		description: (
			<>
				We're always taking steps to review and improve security as we know how
				important your data is. Apart from that, any data submitted to us is
				encrypted.
			</>
		),
	},
];

function Feature({ title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center"></div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
