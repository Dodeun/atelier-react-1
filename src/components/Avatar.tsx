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
				</figcaption>
			</figure>
		</>
	);
}

export default Avatar;
