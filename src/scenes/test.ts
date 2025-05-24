// src/test-lint.ts
// Archivo de prueba para ESLint + Prettier

const testFunction = (greeting: string, name: string): void => {





















	// 1. Regla ESLint: no-unused-vars (debe marcar error si 'greeting' no se usa)
	console.log(name)

	// 2. Regla Prettier: formato de comillas (debe forzar comillas dobles)
	const badQuotes = 'bad quotes

	// 3. Regla ESLint: tipo explícito (debe sugerir :number)
	const implicitType = 42




	

	// 4. Prettier: indentación (debe convertir tabs a 2 espacios)
	if (true) {
		console.log('indentación incorrecta')
	}

	// 5. Semicolons (depende de tu config Prettier/ESLint)
	const missingSemicolon = 'oops'
}

// 6. Regla TypeScript: any explícito (debe marcar error)
const dangerous: any = 'esto es peligroso'
