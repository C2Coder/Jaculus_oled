export const spacing = 1;

const symbols = [" ", "A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"]
const letters = [
    [0, 0, 0, 0],
    [126, 136, 136, 136, 126],
    [4, 42, 42, 42, 30],
    [254, 146, 146, 146, 108],
    [254, 34, 34, 34, 28],
    [124, 130, 130, 130, 68],
    [28, 34, 34, 34, 20],
    [254, 130, 130, 130, 124],
    [28, 34, 34, 34, 254],
    [254, 146, 146, 146, 130],
    [28, 42, 42, 42, 26],
    [254, 144, 144, 144, 128],
    [126, 144, 144, 128, 64],
    [124, 130, 146, 146, 94],
    [16, 40, 42, 42, 60],
    [254, 16, 16, 16, 254],
    [254, 32, 32, 32, 30],
    [130, 254, 130],
    [290],
    [4, 130, 252, 128],
    [2, 188],
    [254, 16, 40, 68, 130],
    [254, 8, 20, 34],
    [254, 2, 2, 2, 2],
    [254],
    [254, 64, 32, 64, 254],
    [62, 32, 30, 32, 30],
    [254, 32, 16, 8, 254],
    [62, 32, 32, 32, 30],
    [124, 130, 130, 130, 124],
    [28, 34, 34, 34, 28],
    [254, 144, 144, 144, 96],
    [62, 40, 40, 40, 16],
    [124, 130, 138, 132, 122],
    [16, 40, 40, 40, 62],
    [254, 144, 152, 148, 98],
    [62, 16, 32, 32, 16],
    [100, 146, 146, 146, 76],
    [18, 42, 42, 42, 36],
    [128, 128, 254, 128, 128],
    [64, 252, 66, 66, 4],
    [252, 2, 2, 2, 252],
    [60, 2, 2, 2, 62],
    [224, 24, 6, 24, 224],
    [48, 12, 2, 12, 48],
    [254, 4, 24, 4, 254],
    [60, 2, 60, 2, 60],
    [198, 40, 16, 40, 198],
    [34, 20, 8, 20, 34],
    [192, 32, 30, 32, 192],
    [50, 10, 10, 10, 60],
    [134, 138, 146, 162, 194],
    [38, 42, 42, 42, 50],]

export function get_symbol(symbol: string): number[] {
    return letters[symbols.indexOf(symbol)]
}