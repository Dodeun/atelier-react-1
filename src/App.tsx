import "./App.css";
import Avatar from "./components/Avatar";

const simpsons = [
	{
		image:
			"https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
		firstName: "Bart",
		lastName: "Simpson",
	},
	{
		image:
			"https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png",
		firstName: "Lisa",
		lastName: "Simpson",
	},
	{
		image:
			"https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
		firstName: "Maggie",
		lastName: "Simpson",
	},
	{
		image:
			"https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
		firstName: "Marge",
		lastName: "Simpson",
	},
	{
		image:
			"https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
		firstName: "Homer",
		lastName: "Simpson",
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
