

const scriptsInEvents = {

	async FolhaDeEventosFase1_Event21_Act3(runtime, localVars)
	{
		// Obter o valor das vidas da variável global vidas
		let vidas = runtime.globalVars.Vidas;
		
		//Reduz uma vida;
		vidas--;
		
		//Atualiza a variável global no construct 3
		runtime.globalVars.Vidas = vidas;
		
		//Se vidas chegarem a zero, execute a ação (ir par a GameOver)
		if(vidas<0){
			console.log("GameOver");
			runtime.goToLayout.Telafim; //Trocar para o layout tela fim
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
