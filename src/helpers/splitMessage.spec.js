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
			'2/2 my messages, so I don\'t have to do it myself.',
		]
	},
	{
		what: 'If the message contains a span of non-whitespace characters longer than 50 characters, display an error',
		in: 'abc def 12345678901234567890123456789012345678901234567890XYZ ghi',
		out: ['<error>: there is a word over 50 letters!']
	},
	{
		what: 'More splitting - case 1',
		in: 'Pariatur commodo dolor dolore aliquip occaecat ut eu cupidatat culpa.',
		out: [
			'1/2 Pariatur commodo dolor dolore aliquip occaecat',
			'2/2 ut eu cupidatat culpa.',
		]
	},
	{
		what: 'More splitting - case 2',
		in: 'Nisi Lorem cillum magna veniam ea veniam anim nisi amet tempor cupidatat laborum dolor in labore reprehenderit.',
		out: [
			'1/3 Nisi Lorem cillum magna veniam ea veniam anim',
			'2/3 nisi amet tempor cupidatat laborum dolor in',
			'3/3 labore reprehenderit.',
		]
	}	,
	{
		what: 'Case Paragraph => 2 digit',
		in: 'Occaecat labore deserunt ipsum amet ipsum. Laborum in proident cupidatat aute Lorem sunt veniam adipisicing commodo aute voluptate. Qui incididunt eu ut velit mollit non fugiat. Velit ea exercitation aliquip minim sunt esse enim. Ea amet velit aute occaecat nostrud. Laboris pariatur ut elit ut ut ipsum. Consectetur consequat ad incididunt Lorem et aliquip commodo. Fugiat ut Lorem eu minim amet fugiat. Officia et dolore mollit labore minim nulla aliquip. Nostrud aliquip est sint irure mollit.',
		out: [
			'01/12 Occaecat labore deserunt ipsum amet ipsum.',
			'02/12 Laborum in proident cupidatat aute Lorem',
			'03/12 sunt veniam adipisicing commodo aute',
			'04/12 voluptate. Qui incididunt eu ut velit mollit',
			'05/12 non fugiat. Velit ea exercitation aliquip',
			'06/12 minim sunt esse enim. Ea amet velit aute',
			'07/12 occaecat nostrud. Laboris pariatur ut elit',
			'08/12 ut ut ipsum. Consectetur consequat ad',
			'09/12 incididunt Lorem et aliquip commodo. Fugiat',
			'10/12 ut Lorem eu minim amet fugiat. Officia et',
			'11/12 dolore mollit labore minim nulla aliquip.',
			'12/12 Nostrud aliquip est sint irure mollit.'
		]
	}
];

describe('splitMessage', () => {
	cases.forEach(element => {
		it(element.what, () => {
			expect(splitMesssage(element.in)).toEqual(element.out);
		});
	});
});
