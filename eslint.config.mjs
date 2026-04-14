import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier'
import unusedImports from 'eslint-plugin-unused-imports'

const eslintConfig = defineConfig([
   ...nextVitals,
   ...nextTs,
   globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
   {
      plugins: {
         'unused-imports': unusedImports,
      },
      rules: {
         'no-unused-vars': 'off',
         '@typescript-eslint/no-unused-vars': 'off',
         'unused-imports/no-unused-imports': 'error',
         'unused-imports/no-unused-vars': [
            'warn',
            {
               vars: 'all',
               varsIgnorePattern: '^_',
               args: 'after-used',
               argsIgnorePattern: '^_',
            },
         ],
      },
   },
   prettier,
])

export default eslintConfig
