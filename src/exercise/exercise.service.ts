import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Exercise, ExerciseDocument } from './exercise.schema';
import { Model } from 'mongoose';

@Injectable()
export class ExerciseService {

  constructor(
    @InjectModel(Exercise.name) private readonly ExerciseModal: Model<ExerciseDocument>
  ) { }
  async create(exeDto: CreateExerciseDto) {
    return await this.ExerciseModal.create(exeDto)
  }

  async findAll() {
    return await this.ExerciseModal.find().exec()
  }

  async findOne(id: number) {
    return await this.ExerciseModal.findById(id).exec()
  }

 async remove(id: number) {
    return await this.ExerciseModal.findByIdAndDelete(id).exec()
  }
}
