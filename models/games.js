//user model created using sequelize
//talks to the table user

module.exports = function(sequelize, DataTypes){
    return sequelize.define('game', {
            title: DataTypes.STRING,
            genre: DataTypes.STRING,
            gameImg: DataTypes.STRING
        },{

    })
    
};
