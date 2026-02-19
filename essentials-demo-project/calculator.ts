type Data = {
	initialAmount: number;
	annualContrib: number;
	expectedReturn: number;
	duration: number;
};
type Result = {
	year: string;
	totalAmount: number;
	totalContributions: number;
	totalInterestEarned: number;
};
type CalculateResult = Result[] | string;
function calculateInvestment(data: Data): CalculateResult {
	const { initialAmount, duration, annualContrib, expectedReturn } = data;
	if (initialAmount < 0) {
		return 'Initial investment amount must be at least zero.';
	}
	if (duration <= 0) {
		return 'No valid amount of years provided.';
	}
	if (expectedReturn <= 0) {
		return 'Expected return must be at least zero.';
	}
	let total = initialAmount;
	let totalContributions = 0;
	let totalInterestEarned = 0;

	const annualResults: Result[] = [];
	for (let i = 0; i < duration; i++) {
		total = total * (1 + expectedReturn);
		totalInterestEarned = total - totalContributions - initialAmount;
		totalContributions = totalContributions + annualContrib;
		total = total + annualContrib;
		annualResults.push({
			year: `Year ${i + 1}`,
			totalAmount: total,
			totalInterestEarned,
			totalContributions,
		});
	}
	return annualResults;
}
function printResults(results: CalculateResult) {
	if (typeof results === 'string') {
		console.log(results);
		return;
	}
	for (let yearEndResult of results) {
		console.log(yearEndResult.year);
		console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
		console.log(
			`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`,
		);
		console.log(
			`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`,
		);
		console.log('---------------------------------');
	}
}
const investmentData: Data = {
	initialAmount: 5000,
	annualContrib: 500,
	expectedReturn: 0.08,
	duration: 10,
};
const results = calculateInvestment(investmentData);
printResults(results);
