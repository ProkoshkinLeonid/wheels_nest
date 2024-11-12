import {Entity, PrimaryColumn, Column, OneToMany} from "typeorm";
import {WheelFile} from "./wheelFiles.entinty";


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

    @Column('varchar', { array: true })
    filesGuids: string[];

    @OneToMany(() => WheelFile, image => image.wheelsId)
    images: WheelFile[]
}