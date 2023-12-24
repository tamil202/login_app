//  file convert

export const converttobase = (file) => {
    return new Promise((resolve, reject) => {
        const filereader = new FileReader();
        filereader.readAsDataURL(file);

        filereader.onload = () => {
            resolve(filereader.result)
        }
        filereader.onerror = (error) => {
          reject(error);
        };
    })
}