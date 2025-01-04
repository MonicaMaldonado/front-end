export function toBase64(file : File) {
    return new Promise((resolve, rejected) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload =  () => resolve(reader.result);
        reader.onerror = (error) => rejected(error);
    })
}