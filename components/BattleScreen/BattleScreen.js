import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useBattleLogic } from "../../hooks/useBattleLogic";
import PlayerPokemon from "./Pokemon/PlayerPokemon";
import PlayerState from "./PlayerState/PlayerState";
import EnemyPokemon, { enemyPokemonArray } from "./Pokemon/EnemyPokemon";
import EnemyState from "./EnemyState/EnemyState";
import Menu from "./Menu/Menu";
import VictoryMessage from "./Message/VictoryMessage";
import LoserMessage from "./Message/LoserMessage";
import SoundEffect from "./SoundEffect/SoundEffect";
import PokemonSelection from "../PokemonSelection/PokemonSelection";
import OpponentSelection from "../OpponentSelection/OpponentSelection";

function BackgroundMusic() {
	const [playSound] = SoundEffect();

	useEffect(() => {
		playSound("backgroundMusic");
	}, [playSound]);

	return null;
}

function Battle({ selectedPokemon }) {
	const {
		playerHealth,
		victory,
		isDisabled,
		isEnemyDefeated,
		playerAttacking,
		enemyAttacking,
		selectedEnemyPokemonIndex,
		handleAttack,
		handlePlayerDamage,
	} = useBattleLogic(selectedPokemon);

	const enemyPokemon = enemyPokemonArray[selectedEnemyPokemonIndex];

	if (playerHealth <= 0) {
		return <LoserMessage />;
	} else if (victory) {
		return <VictoryMessage />;
	}

	return (
		<ScreenContainer>
			<PlayerState
				currentHealth={playerHealth}
				selectedPokemon={selectedPokemon}
			/>
			<PlayerPokemon
				attacking={playerAttacking}
				isDamaged={enemyAttacking}
				selectedPokemon={selectedPokemon}
			/>
			<EnemyPokemon
				attacking={enemyAttacking}
				wasAttacked={playerAttacking}
				selectedPokemonIndex={selectedEnemyPokemonIndex}
			/>
			<EnemyState
				currentHealth={enemyPokemon.currentHealth}
				maxHealth={enemyPokemon.maxHealth}
				pokemon={enemyPokemon.name}
				level={enemyPokemon.level}
			/>
			<Menu
				onAttack={handleAttack}
				disabled={isDisabled || isEnemyDefeated}
				attacks={selectedPokemon.attacks}
			/>
		</ScreenContainer>
	);
}

export default function BattleScreen() {
	const [selectedPokemon, setSelectedPokemon] = useState(null);
	const [selectedEnemyPokemons, setSelectedEnemyPokemons] = useState(null);

	const handlePokemonSelection = (pokemon) => {
		setSelectedPokemon(pokemon);
	};

	const handleEnemySelection = (enemy) => {
		setSelectedEnemyPokemons(enemy);
	};

	if (!selectedPokemon) {
		return (
			<>
				<BackgroundMusic />
				<PokemonSelection onSelect={handlePokemonSelection} />
			</>
		);
	}

	if (!selectedEnemyPokemons) {
		return (
			<>
				<BackgroundMusic />
				<OpponentSelection onOpponentSelect={handleEnemySelection} />
			</>
		);
	}

	return (
		<>
			<BackgroundMusic />
			<Battle selectedPokemon={selectedPokemon} />
		</>
	);
}

const ScreenContainer = styled.main`
	background-image: url("/background/background-middle.png");
	background-size: 426px 250px;
	display: block;
	font-size: 10px;
	max-height: 325px;
	max-width: 426px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
`;
