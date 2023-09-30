// Crie um schema Yup para validação
import * as yup from 'yup';

export const Validacao = yup.object().shape({
    name: yup.string().required('A Nome é obrigatória'),

    email: yup.string().email('Digite um email válidoo').required('O email é obrigatório'),

    password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('A senha é obrigatória'),

    password_confirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'As senhas não coincidem') // Verifica se é igual a 'password'
        .required('Confirme a senha'),
});