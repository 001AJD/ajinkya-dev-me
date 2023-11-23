import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import SkillBoard from "@/components/skills/skill-board";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<SkillBoard />
		</div>
	);
}
