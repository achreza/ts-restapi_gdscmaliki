import { IntegerDataType } from "sequelize";
import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "events",
})
export class Events extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nama!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  tipe!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  durasi!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  bidang!: string;
}
