let result = {
    rock: {
        rock: 'tie',
        scissors: 'lose',
        paper: 'win',
        spock: 'win',
        lizard: 'lose'
    },
    paper: {
        paper: 'tie',
        rock: 'lose',
        scissors: 'win',
        lizard: 'win',
        spock: 'lose'
    },
    scissors: {
        scissors: 'tie',
        paper: 'lose',
        rock: 'win',
        lizard: 'lose',
        spock: 'win'
    },
    lizard: {
        scissors: 'win',
        paper: 'lose',
        rock: 'win',
        lizard: 'tie',
        spock: 'lose'
    },
    spock: {
        scissors: 'lose',
        paper: 'win',
        rock: 'lose',
        lizard: 'win',
        spock: 'tie'
    }
}

const two = ['rock','paper','scissors','lizard','spock'];

const one = ['rock','paper','scissors'];

export function rps(choice) {
	const opponent = one[Math.floor(Math.random() * 3)];

	if (choice == undefined) {
		return {"player": one[Math.floor(Math.random() * 3)]};
	}

	choice = choice.toLowerCase();

	if (!one.includes(choice)) {
		throw new RangeError("Shot is out of range.");
	}

	return {"player": choice, opponent: opponent, result: result[choice][opponent]}
}

export function rpsls (choice) {
	const opponent = two[Math.floor(Math.random() * 5)];

	if (choice == undefined) {
		return {"player": two[Math.floor(Math.random() * 5)]};
	}

	choice = choice.toLowerCase();

	if (!two.includes(choice)) {
		throw new RangeError("Shot is out of range.");
	}

	return {"player": choice, opponent: opponent, result: result[choice][opponent]}

}