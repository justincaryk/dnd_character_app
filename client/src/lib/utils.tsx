
export const tryParseInt = (str: any, defaultValue: boolean) => {
    let returnValue: number | boolean = defaultValue;

    if(str !== null) {
        if(str.length > 0) {
            if (!isNaN(str)) {
                returnValue = parseInt(str);
            }
        }
    }
    return returnValue;
}
