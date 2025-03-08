
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExerciseDocument = HydratedDocument<Exercise>;

export enum ExerciseCategoryEnum {
    Barbell = "Barbell",
    Dumbbell = "Dumbbell",
    Machine = "Machine",
    bodyWeight = "Body Weight",
}

export enum ExerciseBodyPartsEnum {
    Chest = 'Chest',
    Back = 'Back',
    Shoulders = 'Shoulders',
    Biceps = 'Biceps',
    Triceps = 'Triceps',
    Legs = 'Legs',
    Glutes = 'Glutes',
    Core = 'Core',
    Abs = 'Abs',
    Calves = 'Calves',
    Forearms = 'Forearms',
    FullBody = 'FullBody',
}


@Schema({ timestamps: true })
export class Exercise {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop({
        type: String,
        enum: ExerciseCategoryEnum,
        default: ExerciseCategoryEnum.Barbell,
        index: true
    })
    category: ExerciseCategoryEnum;


    @Prop({
        type: String,
        enum: ExerciseBodyPartsEnum,
        index: true
    })
    bodyPart: ExerciseBodyPartsEnum;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
