import classes from "./skill-board.module.css";
import SkillsList from "./skills-list";

function SkillBoard() {
	return (
		<div className={classes.wrapper}>
			<h3>Skillset</h3>
			<div className={classes.container}>
				<SkillsList />
			</div>
		</div>
	);
}

export default SkillBoard;
