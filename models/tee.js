module.exports = function(sequelize, DataTypes) {
    var Tee = sequelize.define("Tee", {
      color: DataTypes.STRING,
      icon: DataTypes.STING,
    });
    Tee.associate = function(models) {
        Tee.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Tee;
};