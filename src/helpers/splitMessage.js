const MAX_SENT_LEN = 50;

/**
 * Pad "0" to number to create a string
 * Ex: 1 with size 3 => "001"
 * @param {number} num 
 * @param {number} size 
 */
function pad(num, size) {
	var s = num + "";
	while (s.length < size) s = "0" + s;
	return s;
}

/**
 * @param {string} msg - The input string
 * @return {array<string>} - The array of splitting messages
 * If the input one does not need to split, this function will return an 
 * array of one item. 
 */
function splitMessage(msg) {
	// nmsg : normalized message
	const nmsg = msg.trim();
  
	/* from here we will work only with the normalized one */

  const msgLen = nmsg.length;
  // console.log('msglen:', msgLen);

	// if empty return empty array
	if (msgLen === 0) {
		return [];
	}

	// if len is on range => return
  if (msgLen <= MAX_SENT_LEN) {
  	return [nmsg];
  }
  
	// next calculate the len of indicator
	// idea is:
	// + we start with range [1, 9] => 1 digit
	// + this means indicator length is {digit(s) * 2 + 1}
	// + example: "1/2" => length is 3
	// + now the rest is for msg's text => MAX_SENT_LEN - 3
	// + in this case is 50 - 3 = 47
	// + now with this 47 how many chunk we need?
	// + let message's length / 47
	// + if result is (maybe) 8 => well good to go
	// + if result is (maybe) 15 => wow, not good anymore
	// + because we will need 2*2+1 = 5 for indicator's length
	// + => increase the digit to 2
	// + => loop back again
  let digits = 1;
  let requiredDigits = 0;
  let indicatorLen = 0;
  let chunkLen = 0;
  
  do {
    indicatorLen = digits * 2 + 1;

    chunkLen = MAX_SENT_LEN - indicatorLen;

    let integer = Math.round(msgLen / chunkLen);
    requiredDigits = integer.toString(10).length;
		// console.log('required:', requiredDigits);
    
    if (digits < requiredDigits)
      digits++;
  }
	while(digits < requiredDigits)
	
	chunkLen = MAX_SENT_LEN - (digits*2+1);
	// console.log('chunkLen:', chunkLen);
  
	// because we only split by white-space
	// we will split to get words
  const words = nmsg.split(' ');
  let chunkCount = 0;
  let chunks = [];
  
	// for each word we put to chunk until full
	// then we make new chunk and add to new one
	try {
		words.forEach(word => {
			if (word.length > MAX_SENT_LEN) {
				throw '<error>: there is a word over 50 letters!';
			}

			if (chunkCount === 0 || chunks[chunkCount-1].length + word.length + 1 > chunkLen) {
				chunks.push('');
				chunkCount++;
			}
			
			chunks[chunkCount-1] = `${chunks[chunkCount-1]} ${word}`;
		});
		
		chunks = chunks.map((block, index) => `${pad(index+1, requiredDigits)}/${chunks.length}${block}`);
		return chunks;
	}
	catch(e) {
		return [e];
	}
}

module.exports = splitMessage;
