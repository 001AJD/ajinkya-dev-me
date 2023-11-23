import classes from "./navbar.module.css";
import Link from "next/link";

function Navbar() {
	return (
		<div className={classes.container}>
			<nav className={classes.mainNav}>
				<ul>
					<li>
						<Link href={"/"}>
							<span>About</span>
						</Link>
					</li>
					{/* <li>
						<Link href={"/projects"}>
							<span>Projects</span>
						</Link>
					</li> */}
					<li>
						<a href={"https://github.com/001ajd"} target="_blank">
							<span>Github</span>
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/ajinkya-dhomne/"
							target="_blank"
						>
							<span>Linkedin</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
