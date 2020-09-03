module.exports = (length, width, callBack) => {
    if(length <= 0 || width <= 0) {
        setTimeout(() =>
            callBack(new Error("The dimensions should be greater than zero"), null), 2000);
    }
    else {
        setTimeout(() => 
            callBack(null, 
            {
                perimeter: () => (2*(length + width)),
                area: () => (length * width)
            }), 2000);
    }
}
