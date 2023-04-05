import styled from "styled-components";

export default function VictoryMessage() {
	const handleRestart = () => {
		window.location.reload();
	};

	return (
		<VictoryMessageContainer>
			<VictoryTitle>Du hast gewonnen!</VictoryTitle>
			<RestartButton onClick={handleRestart}>Neustart</RestartButton>
		</VictoryMessageContainer>
	);
}

const VictoryMessageContainer = styled.section`
	color: #000;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 36px;
`;

const VictoryTitle = styled.h1`
	color: green;
`;

const RestartButton = styled.button`
	margin-top: 30px;
	background-color: green;
	color: white;
	padding: 10px 20px;
	font-size: 18px;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: darkgreen;
	}
`;
