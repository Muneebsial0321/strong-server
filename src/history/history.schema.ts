
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongoSchema } from 'mongoose';
import { Workout } from 'src/workout/workout.schema';



class Set {
    @Prop({ type: MongoSchema.ObjectId, ref: "Exercise", required: true })
    exercise: string

    @Prop({ type: MongoSchema.ObjectId, ref: "User" })
    user: string

    @Prop({ required: true })
    reps: number

    @Prop({ required: true })
    weight: number

    @Prop({ required: true })
    metric: string

    @Prop({ required: true })
    type: string


}

class Exercise {

    @Prop({ type: MongoSchema.ObjectId, ref: "Exercise", required: true })
    exercise: string

    @Prop({ type: MongoSchema.ObjectId, ref: "User", required: true })
    user: string

    @Prop({ type: [Set], required: true })
    sets: [Set]

}

@Schema({ timestamps: true })
export class History {


    @Prop({
        type: MongoSchema.ObjectId,
        ref: "User",
        required: true,
        index:true
    })
    user: string;

    @Prop({ required: true })
    volume: number

    @Prop({
        type: MongoSchema.ObjectId,
        ref: "Workout",
        required: true

    })
    workout: Workout

    @Prop({
        type: [Exercise],
        required: true

    })
    exercises: [Exercise]
}

export type HistoryDocument = HydratedDocument<History>;
export const HistorySchema = SchemaFactory.createForClass(History);
