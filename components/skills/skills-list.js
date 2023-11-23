import { Fragment } from "react";
import classes from "./skills-list.module.css";

function SkillsList() {
	return (
		<Fragment>
			<ul className={classes.skillsList}>
				<span>
					<li>NodeJS</li>
					<div className={classes.progressContainerNodeJS}>
						<div className={classes.progressBarNodeJS}></div>
					</div>
				</span>
				<span>
					<li>ExpressJS</li>
					<div className={classes.progressContainerNodeJS}>
						<div className={classes.progressBarNodeJS}></div>
					</div>
				</span>
				<span>
					<li>JavaScript</li>
					<div className={classes.progressContainerJavaScript}>
						<div className={classes.progressBarJavaScript}></div>
					</div>
				</span>
				<span>
					<li>React</li>
					<div className={classes.progressContainerReact}>
						<div className={classes.progressBarReact}></div>
					</div>
				</span>
				<span>
					<li>NextJS</li>
					<div className={classes.progressContainerNextJS}>
						<div className={classes.progressBarNextJS}></div>
					</div>
				</span>
				<span>
					<li>MongoDB</li>
					<div className={classes.progressContainerMongoDB}>
						<div className={classes.progressBarMongoDB}></div>
					</div>
				</span>
			</ul>
			<ul className={classes.skillsList}>
				<span>
					<li>GCP</li>
					<div className={classes.progressContainerGCP}>
						<div className={classes.progressBarGCP}></div>
					</div>
				</span>
				<span>
					<li>Azure DevOps</li>
					<div className={classes.progressContainerADO}>
						<div className={classes.progressBarADO}></div>
					</div>
				</span>
				<span>
					<li>Streamsets</li>
					<div className={classes.progressContainerStreamsets}>
						<div className={classes.progressBarStreamsets}></div>
					</div>
				</span>
				<span>
					<li>Terraform</li>
					<div className={classes.progressContainerTF}>
						<div className={classes.progressBarTF}></div>
					</div>
				</span>
				<span>
					<li>Powershell</li>
					<div className={classes.progressContainerPS}>
						<div className={classes.progressBarPS}></div>
					</div>
				</span>
				<span>
					<li>APIGEE</li>
					<div className={classes.progressContainerAPIGEE}>
						<div className={classes.progressBarAPIGEE}></div>
					</div>
				</span>
			</ul>
		</Fragment>
	);
}

export default SkillsList;
