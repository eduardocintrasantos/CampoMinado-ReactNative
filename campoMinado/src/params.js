import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // Proporção do painel superios, que será o cabeçalho (15%)
    difficultLevel: 0.1,
    getColumsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const bordHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(bordHeight / this.blockSize)
    }
}

export default params;