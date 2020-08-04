export const helloMiddleWare = (req, res, next) => {
    console.log("HI I'm middleWare!");
    next();
};