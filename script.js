function charCount(s){
	for(i=0; i<s.length; i++)
	  let Char = s[i];	
	{
		if(s.indexOf(Char) === s.lastIndexOf(Char))	{
			return Char;
		}
		}
	return null;
}