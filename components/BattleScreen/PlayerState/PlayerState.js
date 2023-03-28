import styled from "styled-components";

const StateBox = styled.div`
	position: absolute;
	top: 165px;
	right: 0px;
	background-image: url("/sprites/statusbar-player2.png");
	width: 200px;
	height: 68px;
	background-repeat: no-repeat;
	background-size: contain;
	z-index: 1;
`;

const StateWrapper = styled.div`
	position: relative;
`;

const PokemonName = styled.p`
	position: absolute;
	top: -12px;
	left: 30px;
	z-index: 10;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 20px;
	text-transform: uppercase;
`;

const PokemonLevel = styled.p`
	position: absolute;
	top: -12px;
	right: 29px;
	z-index: 10;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 20px;
`;

const PokemonHealth = styled.p`
	position: absolute;
	top: 27px;
	right: 55px;
	z-index: 11;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 15px;
`;

const PokemonHealthBar = styled.p`
	position: absolute;
	height: 6px;
	width: 89px;
	left: 88px;
	top: 21px;
	z-index: 1;
	background-color: #25b527;
	transition: all 0.4s linear;
	border-radius: 2.5px;
`;

const PokemonSlashHealth = styled.p`
	position: absolute;
	top: 27px;
	right: 45px;
	z-index: 1;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 15px;
`;

const PokemonMaxHealth = styled.p`
	position: absolute;
	top: 27px;
	right: 25px;
	z-index: 1;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 15px;
`;

export default function PlayerState() {
	return (
		<StateBox>
			<StateWrapper>
				<PokemonName>Glurak</PokemonName>
				<PokemonLevel>52</PokemonLevel>
				<PokemonHealth>120</PokemonHealth>
				<PokemonHealthBar
					class="player--pokemon-health-bar"
					role="progressbar"
					aria-valuenow="80"
					aria-valuemin="0"
					aria-valuemax="80"
				></PokemonHealthBar>
				<PokemonSlashHealth>/</PokemonSlashHealth>
				<PokemonMaxHealth>120</PokemonMaxHealth>
			</StateWrapper>
		</StateBox>
	);
}
