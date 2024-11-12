import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";

@Entity("wheel_files")
export class WheelFile {
    @PrimaryColumn("uuid")
    guid: string

    @Column("bytea")
    bytes: Buffer

    @Column("text")
    name: string

    @Column("integer", { nullable: true, name: "wheels_id" })
    wheelsId: number | null
}