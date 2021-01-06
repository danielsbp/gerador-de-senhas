let numeros = [1,2,3,4,5,6,7,8,9,0];
let letras = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let charSpec = ['!', '@', '#', '$', '%', '&', '*', '-', '+'];

let lblSenha = document.querySelector('#senhaGerada');
let edtQtdChar = document.querySelector('#qtdChar');
let chkIncNumbers = document.querySelector('#incNumbers');
let chkIncLetters = document.querySelector('#incLetter');
let chkIncSpecChar = document.querySelector('#incSpecChar');
let lblTeste = document.querySelector('#label');
let slcCaixa = document.querySelector('#caixa');

chkIncLetters.checked = true;
chkIncNumbers.checked = true;
chkIncSpecChar.checked = true;

let nlc;

function createPassword() {
	let a = -1;
	// n = número, l = letra ou c = caractere
	// 
	nlc = [];
	//Verifico quais caracteres estarão presentes na senha;
	if(chkIncLetters.checked==true) {
		a++;
		nlc[a] = letras;
	}
	if(chkIncNumbers.checked==true) {
		a++;
		nlc[a] = numeros;
	}
	if(chkIncSpecChar.checked==true) {
		a++;
		nlc[a] = charSpec;
	}
	
	if(nlc.length === 0) {
		alert('Você deve escolher qlaguma das três opções');
	}
	else if(edtQtdChar.value == '') {
		alert('Você deve inserir a quantidade de caractéres que estarão presentes na senha');
	}
	else {
		//Primeiro index = Número de 0 a "a"; 
		let qtdChar = parseInt(edtQtdChar.value);
		let senha = '';

		for(c = 1; c<=qtdChar; c++) {
			let firstIndex = Math.round(Math.random()*a);
			let secondIndex = Math.round(Math.random()*nlc[firstIndex].length);
			if(secondIndex == -1) {
				secondIndex++;
			}
			if(secondIndex >= nlc[firstIndex].length) {
				secondIndex = nlc[firstIndex].length-1;
			}
			
			let char = nlc[firstIndex][secondIndex];

			if(nlc[firstIndex][0]=='a'){
				if(slcCaixa.value=='ale') {
					let x = Math.round(Math.random());
					if(x==0) {
						char = char.toUpperCase();
					}
					else {
						char = char.toLowerCase();
					}
				}
				else if(slcCaixa.value=='mai') {
					char = char.toUpperCase();
				}
				else {
					char = char.toLowerCase();
				}
			}
			senha = senha + char;
		}
		lblTeste.value = senha;

		
	}
}

function copy() {
	lblTeste.select();
	document.execCommand('copy');
	alert('Senha copiada!');
}