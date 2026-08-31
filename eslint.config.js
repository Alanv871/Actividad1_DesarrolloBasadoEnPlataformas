const js = require('@eslint/js');

module.exports = [
    //Reglas para verificacion del codigo
    //Reglas base de eslint (Javascript)
    js.configs.recommended, {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'commonjs',
            globals: {
                require: 'readonly',
                module: 'writable',
                exports: 'writable',
                __dirname: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': 'warn'
        }
    },
    //Configuracion adicional (solo aplica a los archivos de tests)
    {
         files: ['tests/**/*.js'],          // ← agregado
        languageOptions: {
            globals: {                      // ← agregado
                describe: 'readonly',
                test: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                jest: 'readonly'
            }
        }
    },
    //Exclusiones globales (carpetas o archivos que eslint no debe analizar)
    {
        ignores: ['node_modules/', 'logs/']
    }
];