const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];



function search(str) {
	let results = [];  //set empty array and later it will store filtered fruit keywords.
	results = fruit.filter((keyword) => {
		return keyword.toLowerCase().includes(str.toLowerCase());
	});  //filter out keywords in lowercase from fruit array which includes input that use types in. 

	showSuggestions(results, str);  //suggestion box that stays hidden will show suggested list of fruit names.
};


function searchHandler(e) {
	search(input.value);  //search function is called when user types input to search for fruit.
}


function showSuggestions(results, inputVal) {  //this function is called inside search function to show suggested fruit names for the user to select.
	const suggested = results.map((list)=> {   //map results keywords into new array as <li> element inside <ul>
		if(inputVal.length) {                  //if there is user's input,
		return "<li>" + list + "</li>";}       //list the fruit names  
	});
		suggestions.innerHTML = "<ul>" + suggested.join('') + "</ul>";  //suggested list, <li> which is the whole list of an fruit array, will be inside <ul> and .join method will remove the commas from the array.
};


function useSuggestion(e) {   
	input.value = e.target.innerText;  //user's input is replaced when user clicks on suggested fruit keyword from suggestion box.
	suggestions.innerHTML='';          //after suggested fruit name is chosen, the suggestion box will be cleared.
}


input.addEventListener('keyup', searchHandler);       //searchHandler function will be executed when the user types inputs in input box.
suggestions.addEventListener('click', useSuggestion); //useSuggeation function will be executed when the user clicks on the keyword from the suggestion box. 