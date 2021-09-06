import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
	{
		id: 'q1',
		author: 'Hamze Abdi',
		text: 'Learning react is fan!'
	},
	{
		id: 'q2',
		author: 'Ahmed Habib',
		text: 'Learning vue is great!'
	}
];

const Quotes = () => {
	return (
		<div>
			<QuoteList quotes={DUMMY_QUOTES} />
		</div>
	);
};

export default Quotes;
