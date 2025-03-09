
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongoSchema } from 'mongoose';
import { Exercise } from 'src/exercise/exercise.schema';

export type WorkoutDocument = HydratedDocument<Workout>;

class GamePlan {
    @Prop({ type: MongoSchema.ObjectId, ref: 'Exercise', required: true })
    exercise: Exercise;

    @Prop({ required: true })
    howMantSets: number;
}


@Schema({ timestamps: true })
export class Workout {
    @Prop({ required: true, unique: true })
    name: string;


    @Prop()
    desc: string;

    @Prop({ type: [GamePlan], default: [] })
    gamePlan: [GamePlan]

}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);
