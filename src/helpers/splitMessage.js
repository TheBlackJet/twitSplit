const MAX_SENT_LEN = 50;

function splitMessage(msg) {

	const nmsg = msg.trim();
  
  const msgLen = nmsg.length;
  
  if (msgLen <= MAX_SENT_LEN) {
  	return [nmsg];
  }
  
  let digits = 1;
  let requiredDigits = 0;
  let indicatorLen = 0;
  let blockLen = 0;
  
  while(digits > requiredDigits) {
    indicatorLen = digits * 2 + 1

    blockLen = MAX_SENT_LEN - indicatorLen;

    let estimate = msgLen / blockLen;

    let integer = Math.floor(estimate);
    requiredDigits = integer.toString(10).length;
    
    if (digits > requiredDigits)
      digits++;
  }
  
  
  let blockCount = 0;
  let blocks = [];
  const words = nmsg.split(' ');
  
	try {
		words.forEach(word => {
			if (word.length > MAX_SENT_LEN) {
				throw 'error: there is a word over 50 letters!';
			}

			if (blockCount === 0 || blocks[blockCount-1].length + word.length > blockLen) {
				blocks.push('');
				blockCount++;
			}
			
			blocks[blockCount-1] = `${blocks[blockCount-1]} ${word}`;
		});
		
		blocks = blocks.map((block, index) => `${index+1}/${blocks.length}${block}`);
		return blocks;
	}
	catch(e) {
		return [e];
	}
}

module.exports = splitMessage;
