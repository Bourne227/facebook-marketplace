
const dummy = require('./gdum');
const fuser = require('./fuser');


exports.getDummy = async (req, res) => {
    console.log('called get Dummy');
    const dummys = await dummy.getDummy();
    res.status(200).json(dummys);
    
  };
