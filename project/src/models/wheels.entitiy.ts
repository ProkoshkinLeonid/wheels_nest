import {Entity, PrimaryColumn, Column} from "typeorm";


@Entity("wheels")
export class Wheels {
    @PrimaryColumn("integer", { generated: "increment" })
    id: number

    @Column("numeric")
    price: number

    @Column("text")
    name: string

    @Column("text")
    description: string

    @Column("integer")
    count: number

    @Column("boolean", { default: true })
    isActive: boolean
}