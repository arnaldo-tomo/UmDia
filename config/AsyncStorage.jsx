import AsyncStorage from '@react-native-async-storage/async-storage';
AsyncStor = () => {

    // Função para salvar um objeto no AsyncStorage
    const salvarObjetoNoAsyncStorage = async () => {
        try {
            const objetoSerializado = JSON.stringify(objeto);
            await AsyncStorage.setItem(chave, objetoSerializado);
            console.log('Objeto salvo com sucesso no AsyncStorage');
        } catch (error) {
            console.error('Erro ao salvar objeto no AsyncStorage:', error);
        }
    };

    // Função para recuperar um objeto do AsyncStorage
    const recuperarObjetoDoAsyncStorage = async (chave) => {
        try {
            const objetoSerializado = await AsyncStorage.getItem(chave);
            if (objetoSerializado !== null) {
                const objetoRecuperado = JSON.parse(objetoSerializado);
                console.log('Objeto recuperado do AsyncStorage:', objetoRecuperado);
                return objetoRecuperado;
            } else {
                console.log('Nenhum objeto encontrado para a chave no AsyncStorage');
                return null;
            }
        } catch (error) {
            console.error('Erro ao recuperar objeto do AsyncStorage:', error);
            return null;
        }
    };



    return { recuperarObjetoDoAsyncStorage, salvarObjetoNoAsyncStorage }

}
export default AsyncStor;