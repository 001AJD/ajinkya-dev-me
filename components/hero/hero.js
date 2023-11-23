import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<div className={classes.image}>
					<Image
						src="/images/avatar.jpg"
						alt="Ajinkya's profile photo"
						width={300}
						height={300}
					/>
				</div>
				<div className={classes.content}>
					<h3>Hey, I&apos;m Ajinkya!</h3>
					<p>
						I am a Software Engineer based out of India. I build
						robust, secure, scalable and resilient Software Systems!
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
