function isNumeric(str) 
{
	if (typeof str != "string")
    	return false

	return !isNaN(str) && 
		!isNaN(parseFloat(str)) 
}

function tokenize(code)
{
	let tokens = {tokenArray:[], tokenIndex:0};
	let i = 0;
	while(i < code.length)
	{
		let char = code[i];

		if(isNumeric(char))
		{
			let index = i;
			let number = '';
			while(isNumeric(code[index]))
			{
				number+=code[index];
				index++;
			}
			tokens.tokenArray.push({type:'INT', value:parseInt(number)});
			i+=index-1 - i;
		}
		else if(char === '(')
		{
			let index = i;
			while(code[index] != ')')
			{
				if(index >= code.length)
				{
					console.log("Syntax Error: Parantheses Not Closed");
					return;
				}
				index++;
			}
			tokens.tokenArray.push({type:'PARANTHESES_OPEN'})
		}
		else if(char === ')')
		{
			let index = i;
			while(code[index] != ')')
			{
				if(index >= code.length)
				{
					console.log("Syntax Error: Parantheses Not Opened");
					return;
				}
				index--;
			}
			tokens.tokenArray.push({type:'PARANTHESES_CLOSE'})
		}
		else if(char === '+')
		{
			tokens.tokenArray.push({type:'ADDITION'});		
		}
		else if(char === '-')
		{
			tokens.tokenArray.push({type:'SUBTRACTION'});		
		}
		else if(char === '*')
		{
			tokens.tokenArray.push({type:'MULTIPLICATION'})
		}
		else if(char === '/')
		{
			tokens.tokenArray.push({type:'DIVISION'})
		}
		i++;
	}
	return tokens;
}

function getCurrentToken(tokens)
{
	return tokens.tokenArray[tokens.tokenIndex];
}

function skipToken(tokens)
{
	if(tokens.tokenIndex+1 < tokens.tokenArray.length)
		tokens.tokenIndex++;
}

function presedence(tokens)
{
	let type = getCurrentToken(tokens).type;
	let result = 0;
	if(type === 'INT')
	{
		result = getCurrentToken(tokens).value;
		skipToken(tokens);
	}
	else if(type === 'PARANTHESES_OPEN')
	{
		skipToken(tokens);
		result = parse(tokens);
		skipToken(tokens);
	}
	return result;
}

function term(tokens)
{
	let result = presedence(tokens);

	let type = getCurrentToken(tokens).type;
	
	while(type === 'MULTIPLICATION' || type === 'DIVISION')
	{
		skipToken(tokens);
		let right = presedence(tokens);
		if(type === 'MULTIPLICATION')
		{
			result = result * right;
		}
		else if(type === 'DIVISION')
		{
			result = result / right;
		}
		skipToken(tokens);
		type = getCurrentToken(tokens).type;
	}
	return result;
}

function parse(tokens)
{
	let result = term(tokens);

	let type = getCurrentToken(tokens).type;

	while(type === 'ADDITION' || type === 'SUBTRACTION')
	{
		console.log(tokens.tokenIndex)
		skipToken(tokens);
		let right = term(tokens);
		if(type === 'ADDITION')
		{
			result = result + right;
		}
		else if(type === 'SUBTRACTION')
		{
			result = result - right;
		}
		type = getCurrentToken(tokens).type;
	}
	return result;
}

function interpret(code)
{
	let tokens = tokenize(code);

	let result = parse(tokens);

	alert(result);
}

function run()
{
	interpret(document.getElementById('codeInput').value);
}
