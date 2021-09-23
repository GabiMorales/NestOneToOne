import { Column, 
    CreateDateColumn,
     Entity, 
     JoinColumn, 
     OneToOne, 
     PrimaryGeneratedColumn, 
     UpdateDateColumn 
    } from "typeorm";
import { Profile } from "./profile.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn() 
    id: number;
    
    @Column()
    email: string;

    @Column()
    password: string;

    @OneToOne(()=> Profile)
    @JoinColumn({ name: 'profile:id' })
    profile: Profile;
}