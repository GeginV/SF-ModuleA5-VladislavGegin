
const btnCreate = $('.j-btn-create');
const btnReplace = $('.j-btn-replace');
const textOutput = $('.j-text');

const variable1 = $('.j-var1');
const variable2 = $('.j-var2');
const variable3 = $('.j-var3');
const variable4 = $('.j-var4');
const variable5 = $('.j-var5');
const variable6 = $('.j-var6');
const variableSpeach = $('.j-speach');


console.log('btnCreate located', btnCreate);
console.log('btnReplace located', btnReplace);

const startObject = {
	"text":[
	`Жили-были {var1} да {var2}.`,
	` Была у них {var3}.`,
	` Снесла {var3} {var4}, не простое - золотое`,
	` - {var1} бил, бил - не разбил`,`- {var2} била, била - не разбила.`,
	` {var5} бежала, {var6} задела, {var4} упало и разбилось.`,
	` {var1} плачет, {var2} плачет, а {var3} кудахчет:`,
	` {speach}`]
};

btnCreate.click(function(event) {
	/* Act on the event */
	console.log('btnCreate pressed');

	textOutput.html(startObject.text);
});

btnReplace.click(function(event) {
	/* Act on the event */
	console.log('btnReplace pressed');

	const var1 = variable1.val();
	console.log('var1 says', var1);

	const var2 = variable2.val();
	console.log('var2 says', var2);

	const var3 = variable3.val();
	console.log('var3 says', var3);

	const var4 = variable4.val();
	console.log('var4 says', var4);

	const var5 = variable5.val();
	console.log('var5 says', var5);

	const var6 = variable6.val();
	console.log('var6 says', var6);

	const speach = variableSpeach.val();
	console.log('speach says', speach);

	const endObject = {
	"text":[
	`Жили-были ${var1} да ${var2}.`,
	` Была у них ${var3}.`,
	` Снесла ${var3} ${var4}, не простое - золотое`,
	` - ${var1} бил, бил - не разбил`,`- ${var2} била, била - не разбила.`,
	` ${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
	` ${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
	` ${speach}`]
};
	textOutput.html(endObject.text);
});