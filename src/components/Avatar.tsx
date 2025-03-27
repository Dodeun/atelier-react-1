import { useState } from "react";
import AvatarStyles from "./../styles/Avatar.module.css";

interface avatarProps {
	simpson: {
		image: string;
		firstName: string;
		lastName: string;
	};
}

function Avatar({ simpson }: avatarProps) {
	const { image, firstName, lastName } = simpson;
	const [donutCount, setDonutCount] = useState<number>(0);

	const handleClick = () => {
		setDonutCount((dc) => dc + 1);
	};

	return (
		<>
			<figure className={AvatarStyles.card}>
				<img
					className={AvatarStyles.cardImg}
					src={image}
					alt={`${firstName} ${lastName}`}
				/>
				<figcaption className={AvatarStyles.cardTitle}>
					{firstName}{" "}
					<span className={AvatarStyles.cardSTitleSecondary}>{lastName}</span>
					<button
						className={AvatarStyles.cardBtn}
						type="button"
						onClick={() => {
							handleClick();
							handleClick();
						}}
					>
						🍩 {donutCount}
					</button>
				</figcaption>
			</figure>
		</>
	);
}

export default Avatar;
