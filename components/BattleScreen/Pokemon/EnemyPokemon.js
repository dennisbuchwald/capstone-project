import styled, { keyframes } from "styled-components";
import Image from "next/image";

export const enemyPokemonArray = [
	{
		name: "mewtwo",
		level: 75,
		maxHealth: 120,
		currentHealth: 120,
	},
	{
		name: "gengar",
		level: 80,
		maxHealth: 130,
		currentHealth: 130,
	},
	{
		name: "garados",
		level: 85,
		maxHealth: 140,
		currentHealth: 140,
	},
];

export default function EnemyPokemon({ attacking, selectedPokemonIndex }) {
	const selectedPokemon = enemyPokemonArray[selectedPokemonIndex];
	const { name, level } = selectedPokemon;

	return (
		<EnemyPokemonContainer attacking={attacking}>
			<StyledImage
				src={`/sprites/opponent/hard/${name}.gif`}
				alt={`${name}`}
				width={150}
				height={100}
			/>
		</EnemyPokemonContainer>
	);
}

const StyledImage = styled(Image)`
	object-fit: contain;
`;

const attackAnimation = keyframes`
    0% {
        transform: translate(0, 0) scale(1);
    }
    50% {
        transform: translate(-30px, 30px) scale(1);
    }
    100% {
        transform: translate(0, 0) scale(1);
    }
`;

const EnemyPokemonContainer = styled.figure`
	position: absolute;
	right: -8%;
	top: 15%;
	animation: ${({ attacking }) => (attacking ? attackAnimation : "none")} 0.4s;
`;
