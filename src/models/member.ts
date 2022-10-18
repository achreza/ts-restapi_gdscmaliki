import { IntegerDataType } from "sequelize";
import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "members",
})
export class Members extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nama!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nim!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  bidang!: string;
}
