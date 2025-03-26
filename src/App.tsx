import "./App.css";
import Avatar from "./components/Avatar";

const simpsons = [
	{
		image:
			"https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
		firstName: "Bart",
		lastName: "SIMPSON",
	},
	{
		image:
			"https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png",
		firstName: "Lisa",
		lastName: "SIMPSON",
	},
	{
		image:
			"https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
		firstName: "Maggie",
		lastName: "SIMPSON",
	},
	{
		image:
			"https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
		firstName: "Marge",
		lastName: "SIMPSON",
	},
	{
		image:
			"https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
		firstName: "Homer",
		lastName: "SIMPSON",
	},
];

function App() {
	return (
		<>
			<div className="cards">
				{simpsons.map((simpson) => (
					<Avatar simpson={simpson} key={simpson.firstName} />
				))}
			</div>
		</>
	);
}

export default App;
