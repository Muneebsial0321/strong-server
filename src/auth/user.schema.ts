import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


@Schema({ timestamps: true })
export class User {
    @Prop({ index: true })
    name: string

    @Prop({
        unique:true,
        required:true
    })
    email: string
}



export type UserDocument = HydratedDocument<User>
export const UserSchema = SchemaFactory.createForClass(User)