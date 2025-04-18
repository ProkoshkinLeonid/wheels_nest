import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm"

import { WheelFile } from "./wheel-flile.entinty"

@Entity("wheels")
export class Wheels {
  @PrimaryColumn("integer", { generated: "increment" })
  id: number

  @Column("numeric")
  price: number

  @Column("text")
  model: string

  @Column("text")
  size: string

  @Column("text")
  season: string

  @Column("integer")
  count: number

  @Column("integer")
  storehouse: number

  @Column("boolean", { default: true })
  isActive: boolean

  @OneToMany(() => WheelFile, (image) => image.wheelsId)
  images: WheelFile[]
}
