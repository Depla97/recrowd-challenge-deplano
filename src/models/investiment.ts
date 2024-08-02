const {DataTypes, Model } = require('sequelize');
import sequelize from '../db/db-connection';

export class Investiment extends Model<Investiment> {
  id!: number;
  confirmation_date!: Date;
  amount!: number;
  yearly_rate!: number;
}

Investiment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    confirmation_date: {
      type: DataTypes.DATE,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    yearly_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'investiments',
    timestamps: true,
    createdAt: "creation_date",
    updatedAt: false,
  }
);


/**
 * old model
 *   @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  confirmation_date!: Date;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
    unique: true,
  })
  amount!: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
    unique: true,
  })
  yearly_rate!: number;
}
 */