import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ExerciseModule } from './exercise/exercise.module';
import { WorkoutModule } from './workout/workout.module';
import { HistoryModule } from './history/history.module';
import { GameModule } from './game/game.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BenchmarksModule } from './benchmarks/benchmarks.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL!),
    AuthModule,
    ExerciseModule,
    WorkoutModule,
    HistoryModule,
    GameModule,
    BenchmarksModule],
})
export class AppModule { }
