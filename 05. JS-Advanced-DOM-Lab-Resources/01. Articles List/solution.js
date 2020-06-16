function createArticle() {
	
	const title = document.querySelector('#createTitle').value; //взимаме стойността на заглавието
	const content = document.querySelector('#createContent').value; // взимаме стойноста на съдържанието
	const articles = document.querySelector('#articles'); // взимаме артикълите

	if( title !== "" && content !== ""){
		let article = document.createElement("article"); // създаваме артикъл
		let header = document.createElement("h3"); // създаваме H3 елемент
		let description = document.createElement("p"); // създаваме елемент P

		let headerText = document.createTextNode(title); 
		header.appendChild(headerText);
		article.appendChild(header);

		let descriptionText = document.createTextNode(content);
		description.appendChild(descriptionText);
		article.appendChild(description);

		articles.appendChild(article);

	}
	document.getElementById("createTitle").value = "";
	document.getElementById("createContent").value = "";

}