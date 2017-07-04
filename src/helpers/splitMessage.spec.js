const splitMesssage = require('./splitMessage');

const cases = [
	{
		what: 'should return 1 chunk only if input is less than or equal to 50 characters',
		in: 'abc',
		out: ['abc']
	},
	{
		what: 'should split into chunks if input is greater than 50 characters',
		in: 'I can\'t believe Tweeter now supports chunking my messages, so I don\'t have to do it myself.',
		out: [
			'1/2 I can\'t believe Tweeter now supports chunking',
			'2/2 my messages, so I don\'t have to do it myself.'
		]
	},
	{
		what: 'If the message contains a span of non-whitespace characters longer than 50 characters, display an error',
		in: 'abc def 12345678901234567890123456789012345678901234567890XYZ ghi',
		out: 'error: there is a word over 50 letters!'
	}
];

describe('splitMessage', () => {
	cases.forEach(element => {
		it(element.what, () => {
			expect(splitMesssage(element.in)).toEqual(element.out);
		});
	});
});
