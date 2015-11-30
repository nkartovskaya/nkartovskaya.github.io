var colors=["blue","green","yellow","black","brown","red","grey","violet"];
var newBlock=document.createElement("div");
var parentBlock=document.getElementById('content');
function firstCase() {
	newBlock.style.backgroundColor=colors[1];
	parentBlock.appendChild(newBlock);

}
