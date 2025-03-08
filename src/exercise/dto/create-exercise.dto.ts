import { IsEnum, IsNotEmpty } from 'class-validator';
import { ExerciseCategoryEnum, ExerciseBodyPartsEnum } from '../exercise.schema' 

export class CreateExerciseDto {
  @IsNotEmpty({ message: 'Exercise name is required' })
  name: string;

  @IsEnum(ExerciseCategoryEnum, { message: 'Invalid exercise category' })
  category: ExerciseCategoryEnum;

  @IsEnum(ExerciseBodyPartsEnum, { message: 'Invalid body part' })
  bodyPart: ExerciseBodyPartsEnum;
}
