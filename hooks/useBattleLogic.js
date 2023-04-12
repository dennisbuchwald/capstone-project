import { useState, useEffect } from "react";

export function useBattleLogic(selectedPokemon, selectedOpponentPokemons) {
	const [playerHealth, setPlayerHealth] = useState(120);
	const [victory, setVictory] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const [isEnemyDefeated, setIsEnemyDefeated] = useState(false);
	const [playerAttacking, setPlayerAttacking] = useState(false);
	const [enemyAttacking, setEnemyAttacking] = useState(false);
	const [selectedEnemyPokemonIndex, setSelectedEnemyPokemonIndex] = useState(0);

	// Setzt das aktuelle Pokemon des Gegners als das ausgewählte Pokemon
	const enemyPokemon = selectedOpponentPokemons?.[selectedEnemyPokemonIndex];

	const handlePlayerDamage = (damage) => {
		setPlayerHealth((prevHealth) => prevHealth - damage);
	};

	useEffect(() => {
		if (playerAttacking) {
			setTimeout(() => {
				setPlayerAttacking(false);
			}, 500);
		}

		if (enemyAttacking) {
			setTimeout(() => {
				setEnemyAttacking(false);
			}, 500);
		}
	}, [playerAttacking, enemyAttacking]);

	const handleAttack = (attackIndex) => {
		const attack = selectedPokemon.attacks[attackIndex];
		const enemyPokemon = selectedOpponentPokemons[selectedEnemyPokemonIndex];

		setPlayerAttacking(true);
		const actualDamage = Math.floor(
			attack.damage * (Math.random() * 0.2 + 0.8)
		);
		const newCurrentHealth = Math.max(
			enemyPokemon.currentHealth - actualDamage,
			0
		);
		enemyPokemon.currentHealth = newCurrentHealth;

		if (newCurrentHealth === 0) {
			setIsEnemyDefeated(true);
			setTimeout(() => {
				setIsEnemyDefeated(false);
				if (selectedEnemyPokemonIndex === selectedOpponentPokemons.length - 1) {
					setVictory(true);
				} else {
					setSelectedEnemyPokemonIndex(selectedEnemyPokemonIndex + 1);
				}
			}, 1000);
		}

		if (newCurrentHealth <= 0) {
			return;
		}

		setIsDisabled(true);
		setTimeout(() => {
			if (isEnemyDefeated) {
				setIsDisabled(false);
				return;
			}

			const damageTaken = Math.floor(Math.random() * (50 - 1 + 1) + 1);
			handlePlayerDamage(damageTaken);
			setIsDisabled(false);
			setEnemyAttacking(true);

			if (playerHealth - damageTaken <= 0) {
				setVictory(false);
			}
		}, 1000);
	};

	return {
		playerHealth,
		victory,
		isDisabled,
		isEnemyDefeated,
		playerAttacking,
		enemyAttacking,
		selectedEnemyPokemonIndex,
		handleAttack,
		handlePlayerDamage,
	};
}
