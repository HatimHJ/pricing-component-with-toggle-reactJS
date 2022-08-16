import { useState } from "react";
import Card from "./Components/Card";
import Toggler from "./Components/Toggler";
import { data } from "./data";

function App() {
	const [isChecked, setIsChecked] = useState(true);
	const [isAnnually, setIsAnnually] = useState(false);

	return (
		<div className="App text-center">
			<div className="container">
				<h2 className="heading">Our Pricing</h2>
				<Toggler
					isChecked={isChecked}
					setIsChecked={setIsChecked}
					setIsAnnually={setIsAnnually}
					isAnnually={isAnnually}
				/>
				<div className="cards">
					{data &&
						data.map((item, index) => {
							return (
								<Card
									key={index}
									plan={item.plan}
									price={isAnnually ? item.price.annually : item.price.monthly}
									features={item.features}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default App;
