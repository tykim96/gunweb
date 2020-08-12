export const LocalMiddleWare = (req, res, next) => {
    console.log("HI I'm middleWare!");
    next();
};