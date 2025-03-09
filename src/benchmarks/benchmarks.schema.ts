import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { User } from "src/auth/user.schema";
import { Exercise } from "src/exercise/exercise.schema";

@Schema({ timestamps: true })
export class BenchMark {
    @Prop({
        type: MongooseSchema.ObjectId,
        required: true,
        ref: "Exercise",
        index: true
    })
    exercise: Exercise

    @Prop({
        type: MongooseSchema.ObjectId,
        required: true,
        ref: "User",
        index: true
    })
    user: User
}

export type BenchMarkDocument = HydratedDocument<BenchMark>
export const BenchMarkSchema = SchemaFactory.createForClass(BenchMark)


